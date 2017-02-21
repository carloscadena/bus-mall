'use strict';

function Product(productName, productPath) {
  this.productName = productName;
  this.productPath = productPath;
}

var bag = new Product('R2D2 Luggage', 'img/bag.jpg');
var banana = new Product('Banana Slicer', 'img/banana.jpg');
var bathroom = new Product('TP/IPad Holder', 'img/bathroom.jpg');
var boots = new Product('Toeless Boots', 'img/boots.jpg');
var breakfast = new Product('Toaster/Fryer/Coffee Maker','img/breakfast.jpg');
var bubblegum = new Product('Meatbull Bubblegum', 'img/bubblegum.jpg');
var chair = new Product('Red Chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product('Dog Duckbill', 'img/dog-duck.jpg');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg');
var pen = new Product('Utensil Pen Caps', 'img/pen.jpg');
var petSweep = new Product('Paw Sweeper', 'img/pet-sweep.jpg');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg');
var shark = new Product('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Product('Baby Onesie Sweeper', 'img/sweep.png');
var tauntaun = new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Product('Tentacle USB', 'img/usb.gif');
var waterCan = new Product('Water Can', 'img/water-can.jpg');
var wineGlass = new Product('Wine Glass', 'img/wine-glass.jpg');

var allProducts = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var randomProduct = function () {
  return Math.floor(Math.random() * allProducts.length);
};

var chosenProds = [];
var choosingRandomProduct = function (){
  for (var i = 0; i < 3; i++) {
    chosenProds.push(randomProduct());
  }
  if (chosenProds[0] === chosenProds[1] || chosenProds[0] === chosenProds[2] || chosenProds[1] === chosenProds[2]){
    chosenProds = [];
    choosingRandomProduct();
  }
};
choosingRandomProduct();
console.log(chosenProds);

var displayImage = function (){
  var displayImageOne = document.getElementById('image-one');
  displayImageOne.src = allProducts[chosenProds[0]].productPath;

  var displayImageTwo = document.getElementById('image-two');
  displayImageTwo.src = allProducts[chosenProds[1]].productPath;

  var displayImageThree = document.getElementById('image-three');
  displayImageThree.src = allProducts[chosenProds[2]].productPath;
};
displayImage();
