import { useEffect, useState } from "react";
import { deleteCar, getCars, postCar } from "./API";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    async function initTable() {
      const cars = await getCars();
      setCars(cars)
    }

    initTable();
  }, [])

  function handleFormSubmit(e, car) {
    e.preventDefault()

    async function helper() {
      const { error, message } = await postCar(car)

      if( error ) {
        console.log('ERROR', message)
      } else {
        setCars(cars.concat(car))
      }
    }

    helper()
  }

  function handleDeleteOnClick(e, plate) {
    async function helper() {
      const { error, message } = await deleteCar(plate)

      if( error ) {
        console.log('ERROR', message)
      } else {
        setCars(cars.filter((car) => car.plate !== plate))
      }
    }

    helper();
  }

  return (
    <>
      <Form handleSubmit={handleFormSubmit}/>
      <Table cars={cars} handleDeleteOnClick={handleDeleteOnClick}/>
    </>
  );
}

export default App;