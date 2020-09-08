import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={}/>
      <Row title="Trending now"fetchUrl={}/>
    </div>
  );
}

export default App;
