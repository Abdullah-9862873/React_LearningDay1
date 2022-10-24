/*

######First Method of writing the inline css#####

_______________________________________________________________________

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red", fontSize: "20px", border: "1px solid black" }}>
      Hello World
    </h1>
  </div>,
  document.getElementById("root")
);


_______________________________________________________________________

Note---> To write javascript we have to write the js inside the {} and the styling is given inside the 
	js object {} and the writing style must be kebab case so instead of writing "font-size" we have 
	to write "fontSize"

_______________________________________________________________________

###### Second Method of writing the inline css#####

_______________________________________________________________________

import React from "react";
import ReactDOM from "react-dom";

const customeStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={customeStyle}>Hello World</h1>
  </div>,
  document.getElementById("root")
);

_______________________________________________________________________

Note ----> You can access a particular property of object using the name of object as

import React from "react";
import ReactDOM from "react-dom";

const customeStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customeStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customeStyle}>Hello World</h1>
  </div>,
  document.getElementById("root")
);


*/