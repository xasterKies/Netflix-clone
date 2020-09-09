import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Documentairies" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
