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

var pri = document.querySelector("#price");
var pri2 = document.querySelector("#price2");
var pri3 = document.querySelector("#price3");
var pri4 = document.querySelector("#price4");
var pri5 = document.querySelector("#price5");
var pri6 = document.querySelector("#price6");
var pri7 = document.querySelector("#price7");
var pri8 = document.querySelector("#price8");
var pri9 = document.querySelector("#price9");
var pri10 = document.querySelector("#price10");
var pri11 = document.querySelector("#price11");
var pri12 = document.querySelector("#price12");
var pri13 = document.querySelector("#price13");
var pri14 = document.querySelector("#price14");
var pri15 = document.querySelector("#price15");
var pri16 = document.querySelector("#price16");

var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function () {
  console.log(XHR.responseText);

  var p =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri.innerHTML = p;

  var p2 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri2.innerHTML = p2;

  var p3 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri3.innerHTML = p3;

  var p4 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri4.innerHTML = p4;

  var p5 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri5.innerHTML = p5;

  var p6 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri6.innerHTML = p6;

  var p7 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri7.innerHTML = p7;

  var p8 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri8.innerHTML = p8;

  var p9 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri9.innerHTML = p9;

  var p10 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri10.innerHTML = p10;

  var p11 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri11.innerHTML = p11;

  var p12 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri12.innerHTML = p12;

  var p13 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri13.innerHTML = p13;

  var p14 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri14.innerHTML = p14;

  var p15 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri15.innerHTML = p15;

  var p16 =
    Math.round(
      JSON.parse(XHR.responseText).bpi.USD.rate_float
    ).toLocaleString() + " USD";
  pri16.innerHTML = p16;
};
XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json");
XHR.send();
