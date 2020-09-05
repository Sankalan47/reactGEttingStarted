//declairing a pet variable which has attribute of name type and breed
const Pet = (prop) => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, prop.name),
        React.createElement("h2", {}, prop.type),
        React.createElement("h2", {}, prop.breed)]
    );
};


/*
OR YOU CAN WRITE LIKE THIS. THIS IS CALLED DE-STRUCTURING TECHNIQUE

const Pet = ({name, type, breed}) => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, name),
        React.createElement("h2", {}, type),
        React.createElement("h2", {}, breed)]
    );
};


*/

//below app makes div tag and inside that an h1 tag with statement
const App = () => {
    return React.createElement(
        "div",
        { id: "something" }, /*this {} emepty object...inside that u can add tag attributes like class ids or values anything*/
        [
            React.createElement("h1", {}, "Adopt Me!"), /* you can pass this like an array ...this is called variable arrayity 0_o*/
            React.createElement(Pet, {
                name: "Tom", 
                type: "cat", 
                breed: "street"
            }, ), /*calling pet function which was created before*/
            React.createElement(Pet, {
                name: "spice", 
                type: "Dog", 
                breed: "Bull-Dog"
            }, ), 
            React.createElement(Pet, {
                name: "Jerry", 
                type: "mouse", 
                breed: "pet"
            }, ) 
        ]    
    );
};


//Using ReactDOM rendering this app for making the markup
//basically it makes the tags which was created by app function
ReactDOM.render(React.createElement(App),
document.getElementById("root")
);
