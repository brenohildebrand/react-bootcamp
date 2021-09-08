import { useContext, useEffect, useState } from "react";
import { deleteCar, getCars, postCar } from "./API";
import CarForm from "./CarForm";
import GlobalStyle from "./GlobalStyle";
import Notify, { NotifyContext } from "./Notify";
import CarTable from "./CarTable";

function App() {
  const { notify } = useContext(NotifyContext)

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
        notify({
          type: 'error',
          message
        })
      } else {
        setCars(cars.concat(car))
        notify({
          type: 'success',
          message
        })
      }
    }

    helper()
  }

  function handleDeleteOnClick(e, plate) {
    async function helper() {
      const { error, message } = await deleteCar(plate)

      if( error ) {
        notify({
          type: 'error',
          message
        })
      } else {
        setCars(cars.filter((car) => car.plate !== plate))
        notify({
          type: 'success',
          message
        })
      }
    }

    helper();
  }

  return (
    <>
      <GlobalStyle/>
      <Notify/>
      <CarForm handleSubmit={handleFormSubmit}/>
      <CarTable cars={cars} handleDeleteOnClick={handleDeleteOnClick}/>
    </>
  );
}

export default App;