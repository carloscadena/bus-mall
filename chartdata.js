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

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: 'Times picked',
      data: clickData,
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
