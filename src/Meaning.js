import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <h3>
        {props.meaning.partOfSpeech}
        </h3>

        {props.meaning.definitions.map(function (definition, index) {
            return (
                <div key={index}>
                    <div>
                        <strong>Definition: </strong>{definition.definition}
                        <br />
                        <Examples examples={definition.example} />
                        <br />
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                </div>
            );
        })}
    </div>
    );
}