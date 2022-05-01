import React, { useEffect, useRef } from "react";

export default function LeftMusic(props) {
  const element = useRef();

  function findMusicHandler() {
    props.onFind(props.id);
  }

  const active = props.active === props.id;
  useEffect(() => {
    if (element.current) {
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [active]);
  return (
    <div
      ref={active ? element : null}
      onClick={findMusicHandler}
      className={`__music music1 ${active ? "setBorder" : ""}`}
    >
      <div className="leftImgContainer">
        <img className="image_left" src={props.image} alt="" />
      </div>
      <div className="entries_music">
        <span className="ingrains music_name">{props.title}</span>
        <span className="ingrains singer_name">{props.singer}</span>
      </div>
    </div>
  );
}
