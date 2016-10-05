function previousImage() {
  console.log("previous image");
  var currentImage = $( "figure.visible" );
  currentImage.removeClass("visible");
  if (currentImage.prev().length === 0) {
    $("#container figure:last").addClass("visible");
  } else {
    currentImage.prev().addClass("visible");
  }
}

function nextImage() {
  console.log("next image");
  var currentImage = $( "figure.visible" );
  currentImage.removeClass("visible");
  if (currentImage.next().length === 0) {
    $("#container figure:first").addClass("visible");
  } else {
    currentImage.next().addClass("visible");
  }
}

function alertMe() {
  console.log("auto-scroll clicked");
  setInterval(nextImage,2000);
}

$(".prev_button").click(previousImage);
$(".next_button").click(nextImage);
$(".auto-button").click(alertMe);

// var container = $("#container");
// var counter = 0;
// var imgArray = [
//   "../img/chalkley_1.png",
//   "../img/chalkley_2.png",
//   "../img/chalkley_3.png",
//   "../img/chalkley_4.png",
//   "../img/guil_1.png",
//   "../img/guil_2.jpg"
// ];
// var zeroIndexNumOfPicsInArray = imgArray.length - 1;

// function displayImage(array) {
//   container.html(
//     "<button class='prev_button'><span class='glyphicon glyphicon-arrow-left'></span></button>" +
//       "<img src='" +
//         array[counter] +
//       "'>" +
//     "<button class='next_button'><span class='glyphicon glyphicon-arrow-right'></button>"
//   );
//   console.log("<img src='" + array[counter] + "'>");
// }

// function previousImage() {
//   console.log("previous image");
//   console.log(counter);
//   counter = zeroIndexNumOfPicsInArray - counter;
//   console.log(counter);
//   displayImage(imgArray);
// }

// function nextImage() {
//   console.log("next image");
// }

// displayImage(imgArray);

// $(".prev_button").click(previousImage);
// $(".next_button").click(nextImage);