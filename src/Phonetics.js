import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        {" "}
        <span>{props.phonetic.text}</span>
        <br />
        <ReactAudioPlayer
          src={props.phonetic.audio}
          onPlay
          controls
          className="audio"
        />
      </div>
    );
  } else {
    return null;
  }
}
