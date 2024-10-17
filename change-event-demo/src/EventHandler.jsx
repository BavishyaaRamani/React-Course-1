//onChange event handler is used to handle form events like input,selectoptions,radio

import React, {useState} from "react";


function EventHandler(){

const [name, setName] = useState("Guest")

const [age, setAge] = useState(0)

const [lang, setLang] = useState("English");

const [gender, setGender] = useState("Male");

const [comments, setComments] = useState("")

const nameChange = (event) => {
    setName(event.target.value);
}

const ageChange = (event) => {
    setAge(event.target.value);
}

const langChange = (event) => {
    setLang(event.target.value);
}

const genderChange = (event) => {
    setGender(event.target.value);
}

const commentsChange = (event) => {
    setComments(event.target.value);
}


    return(
        <div>
            <input value={name} onChange={nameChange}></input>
            <p> The given name is {name}</p>

            <input type="Number" value={age} onChange={ageChange}></input>
            <p> {name} age is {age}</p>

            <label>Male 
            <input type="radio" value="Male" checked={gender === "Male"}onChange={genderChange}>
            
            </input></label>
            
            <label>Female
            <input type="radio" value="Female" checked={gender === "Female"}onChange={genderChange}>

            </input></label>
            
            <p> {name} gender is {gender}</p>

            <select value={lang} onChange={langChange}>
                <option>English</option>
                <option>Tamil</option>
                <option>Telugu</option>
            </select>
            <p> Chosen language is {lang}</p>

            <p>About {name}</p>
            <textarea value={comments} placeholder="Tell me about yourself" onChange={commentsChange}>  </textarea>
            <p>{comments}</p>

        </div>
    )
}

export default EventHandler;