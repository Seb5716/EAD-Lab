import { useState, useEffect } from "react";

function TimerComponent(){
    const[ sec, setSec] = useState(0);
    const[ buttonstate, setButtonState] = useState("Start");
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
            setButtonState("Stop");
        }
        else{
            setRunFlag(false);
            setButtonState("Start");
        }
    }
    return(
        <div>
            <p> Timer: {sec} ms </p>
            <button onClick={Toggle}>{buttonstate}</button>
            <button onClick={Reset}>Reset</button>
        </div>

    );
} export default TimerComponent