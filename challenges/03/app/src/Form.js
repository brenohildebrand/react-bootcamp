import { useState } from 'react'

function Form({ handleSubmit }) {

    const [image, setImage] = useState('')
    const [brandModel, setBrandModel] = useState('')
    const [year, setYear] = useState(new Date().getFullYear())
    const [plate, setPlate] = useState('')
    const [color, setColor] = useState('')

     return (
        <form data-js="car-form">
            <label htmlFor="image">Imagem (url)</label>
            <input 
                type="url" 
                id="image" 
                value={image} 
                onChange={(e) => setImage(e.target.value)}
            />

            <label htmlFor="brandModel">Marca / Modelo</label>
            <input 
                type="text" 
                id="brandModel" 
                value={brandModel}
                onChange={(e) => setBrandModel(e.target.value)}
            />

            <label htmlFor="year">Ano</label>
            <input 
                type="number" 
                id="year" 
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <label htmlFor="plate">Placa</label>
            <input 
                type="text" 
                id="plate" 
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
            />

            <label htmlFor="color">Cor</label>
            <input 
                type="text" 
                id="color" 
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button 
                type="submit" 
                onClick={(e) => {
                    handleSubmit(e, {
                        image,
                        brandModel,
                        year,
                        plate,
                        color
                    })

                    setImage('')
                    setBrandModel('')
                    setYear(new Date().getFullYear())
                    setPlate('')
                    setColor('')
                }}
            >
                Enviar
            </button>
        </form>
    )
}

export default Form;