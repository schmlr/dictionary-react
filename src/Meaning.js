import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";
import "./Dictionary.css";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <hr/>
        <h3>
        {props.meaning.partOfSpeech}
        </h3>

        {props.meaning.definitions.map(function (definition, index) {
            if (index < 3) {
                return (
                    <div key={index}>
                        <div>
                            <div className="Definitions">{index + 1}. {definition.definition}</div>
                            <Examples examples={definition.example} />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    </div>
                );
              } else {
                return null
              }
        })}
    </div>
    );
}