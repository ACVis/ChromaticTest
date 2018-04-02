document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// var sass = require "node-sass"
// var chromatic = require "chromatic-sass"

// sass.render({
//   file: scss_filename,
//   functions: chromatic
// }, function (err, result) { /*...*/ });

// var sass = require("node-sass");
// var chromatic = require("chromatic-sass");
// sass.render(
//   {
//     file: scss_filename,
//     functions: chromatic
//   },
//   function(err, result) {
//     /*...*/
//   }
// );
// // OR
// var result = sass.renderSync({
//   data: scss_content
// });

var sass = require("node-sass");
var chromatic = require("chromatic-sass");

sass.render(
  {
    file: "main.scss",
    functions: chromatic
  },
  function(err, result) {
    /*...*/
  }
);
