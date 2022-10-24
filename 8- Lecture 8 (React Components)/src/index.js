// In React the components are used to split up a large code into small chunks and then reuse them where needed


// ##### One method to use react component #####

//_______________________________________________________________________________________________

// import React from "react";
// import ReactDOM from "react-dom";

// function Heading() {
//   return <h1>My Favourite Foods</h1>;
// }

// ReactDOM.render(
//   <div>
//     <Heading />
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );


//__________________________________________________________________________________________________

// Now other method is to create a seperate file named "Heading.jsx" inside which we will have the component data and then we can export it from there and import it where needed

//_________________________________________________________________________________________________

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
