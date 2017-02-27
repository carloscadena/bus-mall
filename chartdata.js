'use strict';

var context = document.getElementById('chart').getContext('2d');
var allProducts = JSON.parse(localStorage.allProducts);

function allProductClicks(products){
  var productClicks = [];

  for (var i = 0; i < products.length; i++){
    productClicks.push(products[i].timesPicked);
  }
  return productClicks;
}

function allProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++){
    productNames.push(products[i].productName);
  }
  return productNames;
}

var clickData = allProductClicks(allProducts);
var nameData = allProductNames(allProducts);
var colors = [
  'rgba(255, 0, 0, 0.5)', 'rgba(255, 50, 0, 0.5)', 'rgba(255, 100, 0, 0.5)', 'rgba(255, 150, 0, 0.5)', 'rgba(255, 200, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 255, 50, 0.5)', 'rgba(0, 255, 100, 0.5)', 'rgba(0, 255, 150, 0.5)', 'rgba(0, 255, 200, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(50, 0, 255, 0.5)', 'rgba(100, 0, 255, 0.5)', 'rgba(150, 0, 255, 0.5)', 'rgba(200, 0, 255, 0.5)', 'rgba(255, 100, 100, 0.5)', 'rgba(100, 255, 100, 0.5)', 'rgba(100, 100, 255, 0.5)', 'rgba(2, 96, 247, 0.5)', 'rgba(40, 100, 140, 0.5)'
];

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: 'Times picked',
      data: clickData,
      backgroundColor: colors
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
