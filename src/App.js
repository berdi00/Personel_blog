import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import "./App.css";
import PopUpWindow from "./components/PopUpWindow";
function App() {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <Fragment>
      {show && <PopUpWindow closeModal={closeModal} />}
      <Header />
      <Layout />
    </Fragment>
  );
}

export default App;
