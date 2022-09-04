import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(
    props.defaultKeyword
  );
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Documentation: https://api.dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios
      .get(apiUrl)
      .then(handleDictionaryResponse);

    let pexelApiKey =
      "563492ad6f91700001000001ae2befa45e57489cb197be1ad56406b9";

    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = {
      Authorization: `Bearer ${pexelApiKey}`,
    };

    axios
      .get(pexelApiUrl, { headers: headers })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordSearch(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form
          onSubmit={handleSubmit}
          className="search-engine"
        >
          <input
            type="search"
            className="form-control"
            onChange={handleWordSearch}
            placeholder="Search for a word"
            defaultValue={props.defaultKeyword}
          />{" "}
          <button>
            <i class="bi bi-search"></i>
          </button>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
