import React, { useState } from "react";

function Notes(){

    const [notes, setNotes] = useState(["Apple", "Orange"]);

    function inputNotes(){
        const userVal = document.getElementById("notesInput").value;
        document.getElementById("notesInput").value="";
        setNotes(n=> [...n, userVal]);
    }

    function handleDelete(index){
        setNotes(notes.filter((_,i)=>i!==index));
    }

    return(
        <div>
            <input id="notesInput" placeholder="Enter the notes"></input>
            <button onClick={inputNotes}> Add </button>
            <ul>
                {
                notes.map((note, index)=>
                <li key={index}>
                    {note}
                <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>)
                }
                
            </ul>
        </div>
    )
}

export default Notes;