import React, { useState } from "react";
import Tour from "./component/Tour";

const App = () => {
  const [tours, setTours] = useState("");
  const [input,setInput]=useState("");

  function changeState(event) {
    setInput(event.target.value);
  }

   function searchHandler() {

    const appId = "14320fc6";
    const appKey = "3851280f43ce4819c4a24243c9255c7d";
    fetch(
      `https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${appKey}`
    )
      .then((response) => response.json())
      .then((data) => {
          setTours(data.hits);
      })
      .catch((error) => {
        console.error("Error:");
        return(<h3>Error Accured</h3>);
      });
  }

  return (
    <div className="container">
      <div className="formDiv">
        <lable>Enter Your ingrdient:</lable>
        <input
          type="text"
          className="ingrdientInput"
          onChange={changeState}
        ></input>
        <button onClick={searchHandler}>Search</button>
      </div>
      {tours === "" ? (
        <div className="noData">
          <h3>Search Some Thing</h3>
        </div>
      ) : (
        <div>
          <Tour tours={tours}></Tour>
        </div>
      )}
    </div>
  );
};

export default App;
