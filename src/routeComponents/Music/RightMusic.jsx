import React, { Fragment, useRef } from "react";

export default function RightMusic(props) {
  const audio = useRef(null);
  const play_pause_handler = (e) => {
    if (props.isPlaying === true) {
      props.onPause();
      audio.current.pause();
    } else {
      props.onPlay();
      audio.current.play();
      console.log(e);
    }
  };

  function passRight() {
    if (props.isPlaying && props.matchedMusic.id < 4) {
      const idToDown = props.matchedMusic.id + 1;
      console.log(idToDown);
      props.onFind(idToDown);
    }
  }

  function passLeft() {
    if (props.isPlaying && props.matchedMusic.id > 0) {
      const idToDown = props.matchedMusic.id - 1;
      props.onFind(idToDown);
    }
  }

  function volumeHandler(e) {
    console.log(e.target.value);
    if (audio.current) {
      audio.current.volume = e.target.value / 100;
    }
  }

  return (
    <Fragment>
      <div className="image_container__right">
        <div className="rightImgContainer">
          <img
            className="image_right"
            src={props.matchedMusic.imageRight}
            alt=""
          />
        </div>
        <span className="singer_name right_singer_name">
          {props.matchedMusic.singer}
        </span>
      </div>
      <div className="control_btns">
        <div className="control_emoji">
          <span onClick={passLeft} className="emoji">
            👈👈
          </span>
          <span onClick={play_pause_handler} className="play_btn emoji">
            {props.isPlaying ? "❚ ❚" : "►"}
          </span>
          <span onClick={passRight} className="emoji">
            👉👉
          </span>
        </div>
        <input
          onChange={volumeHandler}
          type="range"
          name="volume"
          min="0"
          max="100"
        />
      </div>
      <audio
        ref={audio}
        autoPlay
        src={props.matchedMusic.music}
        type="audio/mpeg"
      ></audio>
    </Fragment>
  );
}
