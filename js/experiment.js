"use strict";
var input = document.getElementById("input");
var output = document.getElementById("output");

function Escape() {
  output.innerHTML += safehtml `${input.textContent}`; // direct HTML
  output.innerHTML += safehtml `<img src="x" alt="${input.textContent}" />`; // attribute
  output.innerHTML += safehtml `<span class="hackme" ${input.textContent} />`; // within html tag
  output.innerHTML += safehtml `<img src="http://example.com?${input.textContent}">`; // uri
  output.innerHTML += safehtml `<span class="${input.textContent}">`; // style
  output.innerHTML += safehtml `<script>${input.textContent}</script>`; // json

}
function loadBadStuff() {
  var x = new XMLHttpRequest();
  x.open("GET", "/js/lib/evil.txt");
  x.onload = function(e) {
    input.textContent = x.response
  };
  x.send();

}

