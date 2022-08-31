import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          onPlay
          controls
        />
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
