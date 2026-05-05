import { useState, useEffect } from "react";

function TimerComponent(){
    const[ sec, setSec] = useState(0);
    const[ runflag, setRunFlag] = useState(false);

    useEffect(() => {
        let interval = null;
        if(runflag){
            interval = setInterval(() => {setSec(sec => sec+1)},1);
        }
        else{
            clearInterval(interval); 
        }
        return () => clearInterval(interval);
    }, [runflag, sec]);
    function Start(){
        setRunFlag(true);
    }
    function Stop(){
        setRunFlag(false);
    }
    function Reset(){
        setSec(0);
        setRunFlag(false);
    }
    function Toggle(){
        if(!runflag){
            setRunFlag(true);
        }
        else{
            setRunFlag(false);
        }
    }
    return(
        <div>
            <p> Timer: {sec} ms </p>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Toggle}>Toggle</button>
        </div>

    );
} export default TimerComponent