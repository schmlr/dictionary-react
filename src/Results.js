import React from "react";
import Phonetic from "./Phonetic.js";
import Meaning from "./Meaning.js";
import "./Dictionary.css";

export default function Results(props) {
    if(props.results) {
    return (
    <section className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic, index) {
            return (
                <div key={index}>
                    <Phonetic phonetic={phonetic} />
                </div>
            )
        })}
        <br/>
        {props.results.meanings.map(function (meaning, index) {
            return (
                <div key={index}>
                    <Meaning meaning={meaning} />
                </div>
            );
        })}
    </section>
    );
    } else {
      return null;
    }
}