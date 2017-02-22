'use strict';

var totalClicks = 0;
var displayImageOne = document.getElementById('image-one');
var displayImageTwo = document.getElementById('image-two');
var displayImageThree = document.getElementById('image-three');
var context = document.getElementById('chart').getContext('2d');

function Product(productName, productPath, uniqueId) {
  this.productName = productName;
  this.productPath = productPath;
  this.uniqueId = uniqueId;
  this.timesPicked = 0;
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
var lastThreePicked = [];
var choosingRandomProduct = function (){
  chosenProds = [];
  for (var i = 0; i < 3; i++) {
    chosenProds.push(randomProduct());
  }
  if (chosenProds[0] === chosenProds[1] || chosenProds[0] === chosenProds[2] || chosenProds[1] === chosenProds[2]){
    chosenProds = [];
    choosingRandomProduct();
  }
  if (lastThreePicked.includes(chosenProds[0]) || lastThreePicked.includes(chosenProds[1]) || lastThreePicked.includes(chosenProds[2])){
    chosenProds = [];
    choosingRandomProduct();
  }
  lastThreePicked = chosenProds;
};

var displayImage = function (){
  choosingRandomProduct();
  displayImageOne.src = allProducts[chosenProds[0]].productPath;
  displayImageOne.setAttribute('alt', allProducts[chosenProds[0]].uniqueId);
  displayImageOne.addEventListener('click', handleClick);
  allProducts[chosenProds[0]].timesShown++;

  displayImageTwo.src = allProducts[chosenProds[1]].productPath;
  displayImageTwo.setAttribute('alt', allProducts[chosenProds[1]].uniqueId);
  displayImageTwo.addEventListener('click', handleClick);
  allProducts[chosenProds[1]].timesShown++;

  displayImageThree.src = allProducts[chosenProds[2]].productPath;
  displayImageThree.setAttribute('alt', allProducts[chosenProds[2]].uniqueId);
  displayImageThree.addEventListener('click', handleClick);
  allProducts[chosenProds[2]].timesShown++;
};

var displayResults = function(){
  var names = [];
  var data = [];
  // var theResultsList = document.getElementById('something');
  for (var i = 0; i < allProducts.length; i++) {

    names.push(allProducts[i].productName);
    data.push(allProducts[i].timesPicked);
    // var theContent = allProducts[i].productName + ': ' + allProducts[i].timesPicked + '. ' + 'Percentage of time picked when shown: %' + (100 * ((allProducts[i].timesPicked) / (allProducts[i].timesShown)));
    // var theResultsData = document.createElement('li');
    // theResultsData.textContent = theContent;
    // theResultsList.appendChild(theResultsData);
  }
  var chartData = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Times picked',
        data: data,
        // backgroundColor:
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(context, chartData);
};

function handleClick(event){
  event.preventDefault();
  event.stopPropagation();
  totalClicks++;
  var latestClick = event.target.id;
  // debugger;
  console.log(latestClick);
  console.log(event);
  if (event.target.id === 'image-one'){
    console.log(chosenProds[0]);
    allProducts[chosenProds[0]].timesPicked++;
  } else if (event.target.id === 'image-two'){
    console.log(chosenProds[1]);
    allProducts[chosenProds[1]].timesPicked++;
  } else {
    allProducts[chosenProds[2]].timesPicked++;
    console.log(chosenProds[2]);
  }

  if (totalClicks < 25){
    displayImage();
  } else {
    displayResults();
    displayImageOne.removeEventListener('click', handleClick);
    displayImageTwo.removeEventListener('click', handleClick);
    displayImageThree.removeEventListener('click', handleClick);
  }
}

displayImage();
