/* hooks - special func that allows functional components to use react features without writing class components (v16.8)
useState, useEffect, useContext, useCallback

useState - A react hook that allows creation of a stateful varibale and a setter function to update its value in virtual DOM.
*/

import React, { useState } from "react";

function Counter(){

    const [counterVal, setCounterVal] = useState(0); //stateful variable - counterVal setterFunction - setCounterVal

    const counterDecrement = () => {
        setCounterVal(counterVal - 1);

        //updater function : setCounterVal(c => c+1); (used in multiple states) It will consider the previous state and update

        /* setCounterVal(c=>c+1);
            setCounterVal(c=>c+1); --> c=2
            setCounterVal(c=>c+1); --> c=3 */

        //Whereas, without updaterfunction if you increment directly it won't affect the state. The value will remain as 1 even after giving it thrice.
    }

    const counterReset = () => {
        setCounterVal(0);
    }

    const counterIncrement = () => {
        setCounterVal(counterVal + 1);
    }

    return(
        <div>
                <h1>Counter using UseState</h1>
                    <p> {counterVal} </p>
                
                <button onClick={counterDecrement}>Decrement</button>
                <button onClick={counterReset}>Reset</button>
                <button onClick={counterIncrement}>Increment</button>
        </div>
    );
}

export default Counter;