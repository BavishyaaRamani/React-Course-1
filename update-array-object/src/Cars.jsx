import React, { useState } from "react";

function Cars(){

    const [cars, setCars] = useState([]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());

    function AddCar(){
        const newCar = { mk: make, mo: model, yr: year}

        setCars(c=>[...c, newCar]);


        setMake(()=>"");
        setModel(()=>"");
        setYear(()=> new Date().getFullYear());
    }

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleModelChange(event){
        setModel(event.target.value);
    }

    function handleMakeChange(event){
        setMake(event.target.value);
    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i) => i!==index));
    }


    return(
        <div>
            <h1> List of Cars </h1>

            <ul> 
                {
                    cars.map((car,index)=>
                    <li key={index} onClick={()=> handleRemoveCar(index)}> 
                    {car.mk} {car.mo} {car.yr} 
                    </li>)
                }
            </ul>

            <input value={make} placeholder="Enter the make" onChange={handleMakeChange}></input>
            <input value={model} placeholder="Enter the model" onChange={handleModelChange}></input>
            <input type="number" value={year} onChange={handleYearChange}></input>

            <button onClick={AddCar}>Add</button>
        </div>
    )
}

export default Cars;