import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Movies from "../routeComponents/Movie/Movies";
import "./PageMovie.css";

export default function PageMovie() {
  return (
    <Fragment>
      <Outlet />
      <Movies />
    </Fragment>
  );
}
