import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function search(event) {
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        //documentation: https://www.pexels.com/api/documentation/
        let pexelsApiKey = "563492ad6f91700001000001f494627e65274255906c8c7b3e6534cf";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsUrl, { headers: headers } ).then(handlePexelsResponse);
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
                <p className="example-terms">Suggestions: sunset, norway, dog, ...</p>
            </section>
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
    )
}