import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BookReview from "./routeComponents/Book/BookReview";
import MovieIntro from "./routeComponents/Movie/MovieIntro";
import PageBook from "./routes/PageBook";
import PageMovie from "./routes/PageMovie";
import PageMusic from "./routes/PageMusic";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="books" element={<PageBook />}>
        <Route path=":bookId" element={<BookReview />} />
      </Route>
      <Route path="music" element={<PageMusic />}></Route>
      <Route path="movies" element={<PageMovie />}>
        <Route path=":movieId" element={<MovieIntro />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
