/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["the dog", "my grandma", "the mailman", "my bird", "Bobby"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandom(anyArray) {
    let max = anyArray.length - 1;
    let min = 0;
    let random = getRandomNumber(min, max);
    return anyArray[random];
  }

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
