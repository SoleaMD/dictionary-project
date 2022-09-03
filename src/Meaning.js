import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (
        definition,
        index
      ) {
        return (
          <div key={index}>
            <div className="title">
              Definition
            </div>
            <div className="definition">
              {definition.definition}
            </div>
            <em className="example">
              {definition.example}
            </em>
            <Synonyms
              synonyms={definition.synonyms}
            />
          </div>
        );
      })}
    </div>
  );
}
