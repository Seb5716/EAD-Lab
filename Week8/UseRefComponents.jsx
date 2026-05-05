import { useRef, useState } from "react";

function UseRefComp(){
    const[str,setStr] = useState("");
    const stringRef = useRef(null);
    function getSubmit(e){
        e.preventDefault();
        const string = stringRef.current?.value || "";
        alert(string);
        if(stringRef.current) stringRef.current.value = "";
        stringRef.current?.focus();
    } 
    return (
        <form onSubmit={getSubmit}>
            <label>
                <pre>Form: </pre>
                <input ref={stringRef} type="text" placeholder="Type something" />
            </label>
            <button type="submit"> Submit</button>
        </form>
    );
} export default UseRefComp