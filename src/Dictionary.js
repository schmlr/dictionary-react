import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
    function handleResponse(response) {
        setResults(response.data[0]);
    }
    
    function search(event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <section>
            <h1>Which word do you want to look up?</h1>
            <form onSubmit={search}>
                <input type="search" placeholder="Enter a term" onChange={handleKeywordChange}></input>
                <input type="submit" value="Search" className="search-button"></input>
            </form>
            <p className="example-terms">For example: sunset, norway, dog, ...</p>
            </section>
            <Results results={results}/>
        </div>
    )
}