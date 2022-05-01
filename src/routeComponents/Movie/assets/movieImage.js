import inception from "../../../images/movieImages/inceptionRow.jpg";
import inceptionIntro from "../../../images/movieImages/inception.jpg";

import interstellar from "../../../images/movieImages/interstellarRow.jpg";
import interstellarIntro from "../../../images/movieImages/interstellar.jpg";

import quietPlace from "../../../images/movieImages/quietPlace.jpg";
import quietPlaceIntro from "../../../images/movieImages/quietPlaceRow.jpg";

export default [
  {
    movieIntro: "inceptionRow.jpg",
    image: inception,
    image2: inceptionIntro,
    video: "inception.mp4",
    title: "Inception",
    description: "Inception description",
    movieId: "11",
  },
  {
    movieIntro: "interstellarRow.jpg",
    video: "interstellar.mp4",
    image: interstellar,
    image2: interstellarIntro,
    title: "Interstellar",
    description: "Interstellar description",
    movieId: "10",
  },
  {
    movieIntro: "quietPlaceRow.jpg",
    image: quietPlace,
    image2: quietPlaceIntro,
    video: "quietPlace.mp4",
    title: "A Quiet Place",
    description: "A Quiet Place description",
    movieId: "12",
  },
];
