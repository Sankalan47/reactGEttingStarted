//importing react
import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.1";

/*

*/

//below app makes div tag and inside that an h1 tag with statement
const App = () => {
  // return React.createElement(
  //   "div",
  //   {
  //     id: "something",
  //   } /*this {} emepty object...inside that u can add tag attributes like class ids or values anything*/,
  //   [
  //     React.createElement(
  //       "h1",
  //       {},
  //       "Adopt Me!"
  //     ) /* you can pass this like an array ...this is called variable arrayity 0_o*/,
  //     React.createElement(Pet, {
  //       name: "Tom",
  //       type: "cat",
  //       breed: "street",
  //     }) /*calling pet function which was created before*/,
  //     React.createElement(Pet, {
  //       name: "spice",
  //       type: "Dog",
  //       breed: "Bull-Dog",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Jerry",
  //       type: "mouse",
  //       breed: "pet",
  //     }),
  //   ]
  // );

  /* using named components and props in the jsx*/
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Tom" type="cat" breed="street" />
      <Pet name="Spice" type="Dog" breed="Bull-dog" />
      <Pet name="Jerry" type="mouse" breed="home" />
    </div>
  );
};

//Using ReactDOM rendering this app for making the markup
//basically it makes the tags which was created by app function
render(<App />, document.getElementById("root"));
