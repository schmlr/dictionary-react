import React from "react";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio}><button className="btn-primary">Listen</button></a>
            <span> {props.phonetic.text}</span>
        </div>
    )
}