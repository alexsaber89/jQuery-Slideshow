'use strict';
var container = $("#container");
var imgArray = ["../img/chalkley_1.png","../img/chalkley_2.png","../img/chalkley_3.png","../img/chalkley_4.png","../img/guil_1.png","../img/guil_2.png"];
var counter = 0;

function getFiles(array){
  container.html("<img src='" + array[counter] + "'>");
  console.log("<img src='" + array[counter] + "'>");
  counter++;
}

getFiles(imgArray);