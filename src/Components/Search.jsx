import { useState } from "react"
import Style from "./Card.module.css";

export default function Search({onTask}){

    const [text,SetText]=useState("");

    const handleChange=(e)=>{
        SetText(e.target.value);
    }

    const handleCLick=(e)=>{
        e.preventDefault();
        onTask(text);
        SetText("");
    }
    return (
        <div>
            <input className={Style.input} type="text" 
            placeholder="Search by users name" 
            value={text}
            onChange={handleChange}
            />
            <button onClick={handleCLick}>+</button>
        </div>
    )
}
