filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// let price = document.querySelector("#price");
// var XHR = new XMLHttpRequest();
// XHR.onreadystatechange = function () {
//   if (XHR.readyState == 4 && XHR.status == 200) {
//     var rate = JSON.parse(XHR.responseText).bpi.USD.rate + " " + JSON.parse(XHR.responseText).bpi.USD.code;
//     price.innerHTML = rate;
//   }
// };
// XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
// XHR.send();

var pri = document.querySelector("#price");
var pri2 = document.querySelector("#price2");
var pri3 = document.querySelector("#price3");
var pri4 = document.querySelector("#price4");
var pri5 = document.querySelector("#price5");
var pri6 = document.querySelector("#price6");
var pri7 = document.querySelector("#price7");
var pri8 = document.querySelector("#price8");
var pri9 = document.querySelector("#price9");

var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
  console.log(XHR.responseText);

  var p =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 2
    ).toLocaleString() + " USD";
  pri.innerHTML = p;

  var p2 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 3
    ).toLocaleString() + " USD";
  pri2.innerHTML = p2;

  var p3 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 4
    ).toLocaleString() + " USD";
  pri3.innerHTML = p3;

  var p4 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri4.innerHTML = p4;

  var p5 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri5.innerHTML = p5;

  var p6 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri6.innerHTML = p6;

  var p7 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri7.innerHTML = p7;

  var p8 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri8.innerHTML = p8;

  var p9 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float * 1
    ).toLocaleString() + " USD";
  pri9.innerHTML = p9;
  
};
XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json");
XHR.send();
