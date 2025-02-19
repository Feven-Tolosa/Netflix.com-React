import { useState } from "react";
import "./App.css";
import Row from "./components/Row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGENAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trading Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fatchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fatchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fatchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fatchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fatchDocumenteriesMovies}
      />
      <h1 className="logo">BY FEVEN MERCY</h1>
    </div>
  );
}

export default App;
