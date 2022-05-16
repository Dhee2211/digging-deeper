import React from "react";
import ReactDOM from "react-dom";

const fname = "Dhee";
const lname = "Panwar";
const number = Math.floor(Math.random() * 30);
// old format
/*ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h2>Your lucky number is {number}</h2>
  </div>,
  document.getElementById("root")
);*/

//es6 fromat
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}</h1>
    <h2>Your lucky number is {number}</h2>
  </div>,
  document.getElementById("root")
);
