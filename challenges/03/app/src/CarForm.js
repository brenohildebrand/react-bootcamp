import { useState } from 'react'
import styled from 'styled-components'

function CarForm({ handleSubmit }) {

    const [image, setImage] = useState('')
    const [brandModel, setBrandModel] = useState('')
    const [year, setYear] = useState(new Date().getFullYear())
    const [plate, setPlate] = useState('')
    const [color, setColor] = useState('')

     return (
         <Wrapper>
            <Form>
                <H1>Registre Seu Carro</H1>
            
                <Label htmlFor="image">Imagem (url)</Label>
                <Input 
                    type="url" 
                    id="image" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)}
                />

                <Label htmlFor="brandModel">Modelo</Label>
                <Input 
                    type="text" 
                    id="brandModel" 
                    value={brandModel}
                    onChange={(e) => setBrandModel(e.target.value)}
                />

                <Label htmlFor="year">Ano</Label>
                <Input 
                    type="number" 
                    id="year" 
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />

                <Label htmlFor="plate">Placa</Label>
                <Input 
                    type="text" 
                    id="plate" 
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                />

                <Label htmlFor="color">Cor</Label>
                <Input 
                    type="text" 
                    id="color" 
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />

                <Button 
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
                </Button>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 42vw;
    height: 100vh;

    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    background-color: lightgray;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;    
`

const H1 = styled.h1`
    text-align: center;
    padding: 10px;

    margin-bottom: 50px;
`

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
`

const Input = styled.input`
    margin-bottom: 30px;
    height: 40px;

    width: 30vw;
    padding: 5px;

    font-size: .9rem;
`

const Button = styled.button`
    width: 130px;
    height: 40px;
    margin: 30px auto 10px auto;

    font-size: 0.9rem;

    background-color: white;
    border: none;
    outline: none;

    &:hover {
        background-color: whitesmoke;
    }

    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2)
`

export default CarForm;