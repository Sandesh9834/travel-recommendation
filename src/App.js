import React, { useState } from "react";
import "./styles.css";

var recommendDirectory = {
  Forts: [
    { name: "Shivneri", rating: "4.5/5" },
    { name: "Raigad Fort", rating: "4.5/5" },
    { name: "Sindhudurg", rating: "4/5" }
  ],

  World_Heritage_Sites: [
    { name: "Ajanta-Ellora Caves", rating: "5/5" },
    { name: "Kaas Plateau", rating: "5/5" },
    { name: "Kailasa Temple", rating: "5/5" }
  ],

  Hill_Stations: [
    {
      name: "Mahabaleshwar",
      rating: "4.5/5"
    },
    {
      name: "Matheran",
      rating: "4.5/5"
    },
    {
      name: "Pachgani",
      rating: "4/5"
    }
  ]
};
var arrDirectory = Object.keys(recommendDirectory);

export default function App() {
  const [counter, setCounter] = useState("Forts");

  function clickHandlerOne(counter) {
    setCounter(counter);
  }
  return (
    <div className="App">
      <h2>🌇 Travel Recommendation App</h2>
      <div>
        {arrDirectory.map(function (destination) {
          return (
            <button
              key={destination}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
              onClick={() => {
                clickHandlerOne(destination);
              }}
            >
              {destination}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {recommendDirectory[counter].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div style={{ fontSize: "smaller" }}>{place.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
