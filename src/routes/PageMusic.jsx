import LeftMusic from "../routeComponents/Music/LeftMusic";
import RightMusic from "../routeComponents/Music/RightMusic";
import music from "../routeComponents/Music/music";
import "./PageMusic.css";
import { Fragment, useEffect, useState } from "react";

export default function PageMusic() {
  const [match, setMatch] = useState([]);
  const [activeBorder, setActiveBorder] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function play() {
    setIsPlaying(true);
  }

  function pause() {
    setIsPlaying(false);
  }

  function findMatch(id) {
    const match = music.find((mus) => mus.id === id);
    setIsPlaying(true);
    setMatch(match);
    setActiveBorder(match.id);
  }

  // useEffect(() => {
  //   setActiveBorder(match.id);
  // }, [match]);
  return (
    <Fragment>
      <div className="music__layout">
        <h1 class="musicify">MUSICIFY</h1>
        <div className="music__container left__side__container">
          {music.map((music) => (
            <LeftMusic
              active={activeBorder}
              key={music.id}
              id={music.id}
              image={music.imageLeft}
              singer={music.singer}
              title={music.title}
              onFind={findMatch}
            />
          ))}
        </div>
        <div className="music__container right__side__container">
          <RightMusic
            active={activeBorder}
            onFind={findMatch}
            onPlay={play}
            onPause={pause}
            isPlaying={isPlaying}
            matchedMusic={match}
          />
        </div>
      </div>
    </Fragment>
  );
}
