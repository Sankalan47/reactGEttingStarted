import React from "react";
//declairing a pet variable which has attribute of name type and breed
// const Pet = (prop) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, prop.name),
//     React.createElement("h2", {}, prop.type),
//     React.createElement("h2", {}, prop.breed),
//   ]);
// };
/*
OR YOU CAN WRITE LIKE THIS. THIS IS CALLED DE-STRUCTURING TECHNIQUE*/
export default function pet({ name, type, breed }) {
  /*
    return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
    React.createElement("h2", {}, breed),
  ]);

  */

  /*writing in jsx format */

  return (
    <div>
      <h1>{name}</h1>
      <h1>{type}</h1>
      <h1>{breed}</h1>
    </div>
  );
}
/*
installing babel-eslint and some extra features
    npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
*/
