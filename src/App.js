import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./nasa/Content.js";
import Copyright from "./nasa/Copyright.js";
import Header from "./nasa/Header.js";
import Date from "./nasa/Date.js";
import MainHeading from "./nasa/MainHeading.js";
import Photo from "./nasa/Photo.js";
import Explanation from "./nasa/Explanation.js";
import { sahteVeri } from "./sahte-veri";
import axios from "./axios";

function App() {
  const [tarih, setTarih] = useState("1997-08-21");
  const [bilgi, setBilgi] = useState(sahteVeri);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=3wkI5lZxyiVojEhKgnaeG2kJwgzf00RAFI97pnsz"
      )
      .then((response) => {
        setData(response.data);
      });
  }, [tarih]);

  return (
    <div className="App">
      <Header />
      <Content />
      <Copyright />
    </div>
  );
}

export default App;
