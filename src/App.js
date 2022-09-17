import "./styles.css";
import { useState } from "react";

var pune = {
  History: [
    { place: "Shaniwar Wada", rating: "4/5" },
    { place: "Aga Khan Palace", rating: "3.5/5" },
    { place: "Raja Dinkar Kelkar Museum ", rating: "4.1/5" },
    { place: "Mahadji Shinde Chhatri", rating: "4.3/5" }
  ],
  Nature: [
    { place: "Sinhgad Fort", rating: "4/5" },
    { place: "Khadakwasla Dam", rating: "4.4/5" },
    { place: "Lavasa", rating: "4.2/5" }
  ],
  Food: [
    { place: "Vohuman Cafe", rating: "4.3/5" },
    { place: "Rupesh Misal", rating: "4.1/5" },
    { place: "Rocket Momos, Koregaon Park", rating: "4.9/5" },
    { place: "Maratha Samrat", rating: "4.2/5" }
  ]
};

export default function App() {
  var [state, updateState] = useState("History");

  var puneList = Object.keys(pune);

  function thingsClickHandler(state) {
    updateState(state);
  }
  return (
    <div className="App">
      <h1>Book My Day</h1>
      <h2>
        Explore Fun things to do in and around <span>Pune</span>
      </h2>
      <nav className="nav">
        {puneList.map(function (state) {
          return (
            <button
              className="list-of-things"
              onClick={() => thingsClickHandler(state)}
              key={state}
            >
              {state}
            </button>
          );
        })}
      </nav>

      <hr />

      <div>
        <ul className="details">
          {pune[state].map((item) => (
            <li key={item.name}>
              <div> {item.place}</div>
              <p> Rating: {item.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
