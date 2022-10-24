//_______________________________________________Case-1-math.js__________________________________________________________

import React from "react";

const pi = 3.1415629;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };


//_______________________________________________Case-1-index.js________________________________________________________

import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//_______________________________________________Case-1-Notes________________________________________________________

// Notes---> The thing to note here is that by default "pi" is being exported so if anyone just import from that file then the value he'll get is the value that is being exported by default
//          You can set any name to it like (import PI from "./math") or (import PIE from "./math") It's still the same

//          But in the case of other functions doublePi and triplePi the case is different... You have to import and export them from the name that is being given to them while assigning

//_______________________________________________________________________________________________________________________

//_______________________________________________Case-1-math.js__________________________________________________________

import React from "react";

const pi = 3.1415629;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };

s
//_____________________________________________Case-2-index.js_____________________________________________________________

import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//___________________________________________Case-2-Notes________________________________________________________

// Notes---> You can import everything by typing (* as {name}) but this will import an object and you can access the stuff  by typing (name.{thingtoaccess}) 



