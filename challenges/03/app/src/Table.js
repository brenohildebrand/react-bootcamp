function Table({ cars, handleDeleteOnClick }) {
    return (
        <table data-js="table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Marca / Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car) => {
                    return (
                        <Car 
                            key={car.plate}
                            {...car} 
                            handleDeleteOnClick={handleDeleteOnClick}
                        />
                    )
                })}
            </tbody>
      </table>
    )
}

function Car({ image, brandModel, year, plate, color, handleDeleteOnClick }) {
    return (
        <tr>
            <th>{image}</th>
            <th>{brandModel}</th>
            <th>{year}</th>
            <th>{plate}</th>
            <th>{color}</th>
            <th>
                <img 
                    src="/delete.png"
                    alt="delete car"
                    onClick={(e) => handleDeleteOnClick(e, plate)}
                />
            </th>
        </tr>
    )
}

export default Table