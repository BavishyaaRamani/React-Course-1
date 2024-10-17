import React, {useState} from 'react';

function Food(){

    const [food, setFood] = useState(["Apple", "Banana", "Coconut"])

    function AddItem(){
        const newFood = document.getElementById("newFood").value;
        document.getElementById("newFood").value = "";

        setFood(f=>[...f, newFood]);
    }

    function RemoveItem(index){
        setFood(food.filter((_,i) => i !== index));
    }

    return(
        <div>
            <h2>My Food List</h2>
            <ul>
               {food.map((food, index) => 
               <li key={index} onClick={()=>RemoveItem(index)}> {food} </li>)}
            </ul>

            <input id="newFood" placeholder='Enter a food Item'></input>
            <button onClick={AddItem}>Add</button>
        </div>
    )
}

export default Food;