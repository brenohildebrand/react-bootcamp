import styled from "styled-components"

function CarTable({ cars, handleDeleteOnClick }) {
    return (
        <Wrapper>
            <H1>Registros</H1>
            <Ul>
                <Li>
                    <Imagem>Imagem</Imagem>
                    <Modelo>Modelo</Modelo>
                    <Ano>Ano</Ano>
                    <Placa>Placa</Placa>
                    <Cor>Cor</Cor>
                    <Delete>Delete</Delete>
                </Li>
                {cars.map((car) => {
                    return (
                        <Car 
                            key={car.plate}
                            {...car} 
                            handleDeleteOnClick={handleDeleteOnClick}
                        />
                    )
                })}
            </Ul>
      </Wrapper>
    )
}

function Car({ image, brandModel, year, plate, color, handleDeleteOnClick }) {
    return (
        <Li>
            <Imagem><img src={image} alt="car image"/></Imagem>
            <Modelo>{brandModel}</Modelo>
            <Ano>{year}</Ano>
            <Placa>{plate}</Placa>
            <Cor>{color}</Cor>
            <Delete>
                <img 
                    src="/delete.png"
                    alt="delete car"
                    onClick={(e) => handleDeleteOnClick(e, plate)}
                />
            </Delete>
        </Li>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60vw;
    height: 100vh;

    background-color: lightgreen;
`

const H1 = styled.h1`
    padding: 30px;
    margin-bottom: 30px;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;

    overflow: auto;
    max-height: 80vh;
`

const Li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: whitesmoke;    
    border-radius: 5px;

    margin: 15px;

    width: 45vw;
    height: 60px;

    padding: 10px 30px;

    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);

    & > div {
        padding: 0 15px;
        overflow: hidden;
    }
`

const Imagem = styled.div`
    flex-basis: 25%;

    & > img {
        display: inline;
        width: auto;
        max-width: 80px;
        height: 40px;
    }
`

const Modelo = styled.div`
    flex-basis:  20%
`

const Ano = styled.div`
    flex-basis: 15%;
`

const Placa = styled.div`
    flex-basis: 15%;
`

const Cor = styled.div`
    flex-basis: 15%;
`

const Delete = styled.div`
    flex-basis: 10%;
    text-align: center;

    & > img {
        width: auto;
        height: 20px;
    }
`

export default CarTable