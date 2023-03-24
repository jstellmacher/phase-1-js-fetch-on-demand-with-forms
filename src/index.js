//jais code
// const init = () => {
//   const inputForm = document.querySelector("form");

//   inputForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     //^stop page from refreshing
//     const input = document.querySelector("input#searchByID");

//     console.log(input.value);

//     //event.target.children[1].value;
//     fetch("http://localhost:3000/movies").then((response) =>
//       response.json().then((data) => {
//         console.log(data);
//       })
//     );
//   });
// };

// document.addEventListener("DOMContentLoaded", init);

const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
    //not sure^^^ input form

    fetch(`http://localhost:3000/movies/${input.value}`)
      //${input.value} this confuses me a bit (during prework also)
      .then((response) => response.json())
      .then((data) => {
        //main fetch portion^^^^^^^^^^^^^^^
        const title = document.querySelector("section#movieDetails h4");
        //variable for the title of book and in the DOM looks for h4
        const summary = document.querySelector("section#movieDetails p");
        //variable for summary of book and in DOM looks for p
        //"returns all text contained by an element and all its child elements."(https://www.microfocus.com/documentation/silk-test/200/en/silktestworkbench-help-en/SILKTEST-21EEFF3F-DIFFERENCEBETWEENTEXTCONTENTSINNERTEXTINNERHTML-REF.html)
        title.innerText = data.title;
        //display title
        summary.innerText = data.summary;
        //display book summary
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
//init in the DOM means initialize right?
