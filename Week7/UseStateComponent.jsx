import { useState } from 'react';

function UseStateComponent(){
    const[count, setCount ] = useState(67);
    return(
        <div>
            <p>Current Count: {count} </p>
            <button onClick={() => setCount(count+1)}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>
            <button onClick={() => setCount(67)}> Reset </button>
            <button onClick={() => setCount(-count)}> Complement </button>
        </div>
    );
} 
export default UseStateComponent

