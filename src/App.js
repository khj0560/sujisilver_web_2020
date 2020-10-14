import React from 'react';
import Main from "./js/Main";
import Header from "./js/Header";
import "./css/Common.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <Main />
      </div>
    </div>
  );
}

export default App;
