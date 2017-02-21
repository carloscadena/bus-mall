'use strict';

function Product(productName, productPath, uniqueId) {
  this.productName = productName;
  this.productPath = productPath;
  this.uniqueId = uniqueId;
  this.totalClicks = 0;
  this.timesShown = 0;
}

var bag = new Product('R2D2 Luggage', 'img/bag.jpg', 'r2bag');
var banana = new Product('Banana Slicer', 'img/banana.jpg', 'bananaslicer');
var bathroom = new Product('TP/IPad Holder', 'img/bathroom.jpg', 'bathroomstand');
var boots = new Product('Toeless Boots', 'img/boots.jpg', 'toeboots');
var breakfast = new Product('Toaster/Fryer/Coffee Maker','img/breakfast.jpg', 'breakfastmachine');
var bubblegum = new Product('Meatbull Bubblegum', 'img/bubblegum.jpg', 'meatgum');
var chair = new Product('Red Chair', 'img/chair.jpg', 'redchair');
var cthulhu = new Product('Cthulhu', 'img/cthulhu.jpg', 'seamonster');
var dogDuck = new Product('Dog Duckbill', 'img/dog-duck.jpg', 'duckbill');
var dragon = new Product('Dragon Meat', 'img/dragon.jpg', 'dragonmeat');
var pen = new Product('Utensil Pen Caps', 'img/pen.jpg', 'foodpen');
var petSweep = new Product('Paw Sweeper', 'img/pet-sweep.jpg', 'petbroom');
var scissors = new Product('Pizza Scissors', 'img/scissors.jpg', 'pizzascissors');
var shark = new Product('Shark Sleeping Bag', 'img/shark.jpg', 'sharkbag');
var sweep = new Product('Baby Onesie Sweeper', 'img/sweep.png', 'sharkbag');
var tauntaun = new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 'tauntaunbag');
var unicorn = new Product('Unicorn Meat', 'img/unicorn.jpg', 'unicornmeat');
var usb = new Product('Tentacle USB', 'img/usb.gif', 'wiggleusb');
var waterCan = new Product('Water Can', 'img/water-can.jpg', 'sillycan');
var wineGlass = new Product('Wine Glass', 'img/wine-glass.jpg', 'oddglass');

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
  displayImageOne.setAttribute('id', allProducts[chosenProds[0]].uniqueId);
  displayImageOne.addEventListener('click', handleClick);

  var displayImageTwo = document.getElementById('image-two');
  displayImageTwo.src = allProducts[chosenProds[1]].productPath;
  displayImageTwo.setAttribute('id', allProducts[chosenProds[1]].uniqueId);
  displayImageTwo.addEventListener('click', handleClick);

  var displayImageThree = document.getElementById('image-three');
  displayImageThree.src = allProducts[chosenProds[2]].productPath;
  displayImageThree.setAttribute('id', allProducts[chosenProds[2]].uniqueId);
  displayImageThree.addEventListener('click', handleClick);
};

function handleClick(event){
  var latestClick = event.currentTarget.id;
  // debugger;
  console.log(latestClick);
  console.log(event);

  for (var i = 0; i < allProducts.length; i++) {
    allProducts[chosenProds[0]].uniqueId
  }
}

displayImage();
