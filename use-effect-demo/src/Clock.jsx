/*
useEffect - React Hook tells react to do some code when (one of the following):

useEffect(() => {})  - Runs after every re-render
useEffect(()=>{}, []) - Runs only on mount
useEffect(()=>{}, [value]) - Runs on mount + when value changes

USES
Event Listeners
DOM Manipulation
Fetching API calls
Real time updates (subscriptions)
Clean on unmount
 */

import { useState, useEffect } from "react";

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000)

        return() =>{
            clearInterval(intervalId);
        }
    },
    [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours>12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }


    function padZero(number){
        return (number<10? "0" : "") + number;
    }

    return(
        <div>
            <span> {formatTime()} </span>
        </div>
    )

}

export default Clock;