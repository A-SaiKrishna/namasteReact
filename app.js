// let heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "helloWorld from react"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// let parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "two nested divisions and heading in last")
//   )
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);
// let parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "iam h1"),
//     React.createElement("h2", {}, "iam h2"),
//   ])
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);
let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "h1 from child1"),
    React.createElement("h2", {}, "h2 from chlild1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 from child1"),
    React.createElement("h2", {}, "h2 from child2"),
  ]),
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
