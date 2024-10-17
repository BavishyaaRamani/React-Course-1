import React, {useState} from 'react';

function Car(){

    const [car, setCar] = useState({
        name: "Benz", model: "X", year: 2020
    });

    function updateYear(event){
        setCar(c=> ({...c, year: event.target.value}));
    }

    function updateModel(event){
        setCar(c=>({...c, model: event.target.value}));
    }

    function updateName(event){
        setCar(c=>({...c, name: event.target.value}));
    }

    return(
        <div>
            <p> My Car is {car.name} {car.model} {car.year}</p>
            <input type="number" value={car.year} onChange={updateYear}></input>
            <input value={car.model} onChange={updateModel}></input>
            <input value={car.name} onChange={updateName}></input>
        </div>
    )
}

export default Car;