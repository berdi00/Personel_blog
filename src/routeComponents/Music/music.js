// Singers
import EdSheeran from "../../images/music/EdSheeran.png";
import Weekend from "../../images/music/Weekend.jpg";
import Coldplay from "../../images/music/Coldplay.jpg";
// Albums
import perfect from "../../images/music/Album.jpg";
import shapeOfyou from "../../images/music/Album.jpg";
import blindingLights from "../../images/music/Album2.jpg";
import saveTears from "../../images/music/Album3.jpg";
import hymn from "../../images/music/Album5.png";
// Music
import perfect3 from "../../audios/perfect.mp3";
import shapeOfyou3 from "../../audios/shapeOfyou.mp3";
import coldplay3 from "../../audios/coldplay.mp3";
import blindingLights3 from "../../audios/blindingLights.mp3";
import saveTears3 from "../../audios/saveTears.mp3";

export default [
  {
    imageRight: EdSheeran,
    imageLeft: perfect,
    id: 0,
    music: perfect3,
    singer: "Ed Sheeran",
    title: "Perfect",
  },
  {
    imageRight: Coldplay,
    imageLeft: hymn,
    id: 1,
    music: coldplay3,
    singer: "Coldplay",
    title: "Hymn for the weekend",
  },
  {
    imageRight: EdSheeran,
    imageLeft: shapeOfyou,
    id: 2,
    music: shapeOfyou3,
    singer: "Ed Sheeran",
    title: "Shape of you",
  },
  {
    imageRight: Weekend,
    imageLeft: saveTears,
    id: 3,
    music: saveTears3,
    singer: "The Weekend",
    title: "Save you tears",
  },
  {
    imageRight: Weekend,
    imageLeft: blindingLights,
    id: 4,
    music: blindingLights3,
    singer: "The Weekend",
    title: "The blinding lights",
  },
];
