import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(
    props.defaultKeyword
  );
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // Documentation: https://api.dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
