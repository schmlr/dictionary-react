import React from "react";
import "./Dictionary.css";

export default function Examples(props) {
    if (props.examples) {
        return (
            <div className="Examples">
                "{props.examples}"
            </div>
            
        )
    } else {
        return null;
    }   
}