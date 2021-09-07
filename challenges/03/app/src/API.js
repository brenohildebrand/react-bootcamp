const url = 'http://localhost:3333/cars'

const getCars = async () => (await fetch(url).then(res => res.json()))

const postCar = async (car) => (await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
})
.then(res => res.json()))

const deleteCar = async(plate) => (await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ plate })  
})
.then(res => res.json()))

export { getCars, postCar, deleteCar }