import React, {useState} from "react";

function ColorChange(){

    const [colour, setColour] = useState("#FFFF")

    function colorChange(event){
        setColour(event.target.value);
    }

    return(
        <div className="container" style={{backgroundColor: colour}}>
            <h2> Pick a Colour from the paletter </h2>

            <input type="color" value= {colour} onChange={colorChange}></input>

            <p>The chosen colour is {colour}</p>


        </div>
    )
}

export default ColorChange;