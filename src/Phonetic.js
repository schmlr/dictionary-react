import React from "react";
import { ReactComponent as Icon } from "./sound-icon.svg";
import "./Dictionary.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer"><Icon className="icon"/></a>
            {props.phonetic.text}
        </div>
    )
}