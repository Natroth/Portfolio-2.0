import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Numb from "../audio/numb.mp3";
import Firefly from "../audio/firefly.mp3";
import PN from "../audio/PN.mp3";
import DAO from "../audio/DAO.mp3";

import $ from "jquery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function MusicSkills() {
  const initialPlayButton = {
    numb: faPlay,
    firefly: faPlay,
    pn: faPlay,
    dao: faPlay,
  };

  var [playButton, setPlayButton] = useState(initialPlayButton);

  // play preview of song and change play button
  const playPreview = (e, songId) => {
    e.preventDefault();
    var myAudio = document.getElementById(songId);

    if (myAudio.paused) {
      myAudio.play();
      playButton = initialPlayButton;
      setPlayButton({ ...playButton, [songId]: faPause });
    } else {
      myAudio.pause();
      setPlayButton({ ...playButton, [songId]: faPlay });
    }
  };

  // one song plays at a time
  $(function () {
    $("audio").on("play", function () {
      $("audio")
        .not(this)
        .each(function (index, audio) {
          audio.pause();
        });
    });
  });
  return (
    <div>
      {" "}
      <ul className="skills-list">
        <FontAwesomeIcon icon={faMusic} className="skill-icon" size="3x" />
        <div className="skill-cat-header"> Music</div>
        <hr />
        <div className="skill-list-header"> Instruments I Play</div>

        <li>Guitar</li>
        <li>Bass</li>
        <li>Voice</li>
        <li>MIDI Keyboard</li>
        <li>Percussion Pads</li>

        <div className="skill-list-header"> Tools I Use</div>
        <li>GarageBand</li>
        <li>Audacity</li>
        <li>Splice</li>

        <div className="skill-list-header"> Song Examples</div>
        <ReactAudioPlayer src={Numb} id="numb" />
        <ReactAudioPlayer src={Firefly} id="firefly" />
        <ReactAudioPlayer src={PN} id="pn" />
        <ReactAudioPlayer src={DAO} id="dao" />

        <li onClick={(e) => playPreview(e, "numb")}>
          {" "}
          <FontAwesomeIcon
            icon={playButton["numb"]}
            size="sm"
            color="#09bcf4"
          />{" "}
          Numb
        </li>
        <li onClick={(e) => playPreview(e, "pn")}>
          {" "}
          <FontAwesomeIcon
            icon={playButton["pn"]}
            size="sm"
            color="#09bcf4"
          />{" "}
          Pentatonic Nonsense
        </li>
        <li onClick={(e) => playPreview(e, "dao")}>
          {" "}
          <FontAwesomeIcon
            icon={playButton["dao"]}
            size="sm"
            color="#09bcf4"
          />{" "}
          Down And Out
        </li>

        <li onClick={(e) => playPreview(e, "firefly")}>
          {" "}
          <FontAwesomeIcon
            icon={playButton["firefly"]}
            size="sm"
            color="#09bcf4"
          />{" "}
          Firefly
        </li>
      </ul>
    </div>
  );
}
