'use strict';
(function(){

  var app = angular.module('billCalculator',[]);

  app.controller('ItemController', function($scope){
    $scope.items = {
      0:[
        { id:1, name: 'Standard Starter', price: 4.25 },
        { id:2, name: 'Soup', price: 3.50 },
        { id:3, name: 'Dhosa', price: 4.75 }
      ],
      1:[
        { id:4, name: 'Beef / Chicken Curry', price: 7.25 },
        { id:5, name: 'Chicken Tikka', price: 8.85},
        { id:6, name: 'Lamb', price: 8.25},
        { id:7, name: 'Seafood Curry', price: 9.25 },
        { id:8, name: 'Bhuna Shrimp', price: 8.10 },
        { id:9, name: 'Vartha Meen', price: 10.50 },
        { id:10, name: 'Subzie (Veg)', price: 6.65 }
      ],
      2:[
        { id:11, name: 'Side Dish', price: 4.50 },
        { id:12, name: 'Bangan Bagia', price: 4.95},
        { id:13, name: 'Mutter Paneer', price: 4.95}
      ],
      3:[
        { id:14, name: 'Pilau Rice', price: 2.50 },
        { id:15, name: 'Boiled Rice', price: 2.25},
        { id:16, name: 'Nan', price: 2.25},
        { id:17, name: 'Garlic Nan', price: 2.75},
        { id:18, name: 'Peshwari Nan', price: 3.50},
        { id:19, name: 'Chutney / Ryta', price: 1.45},
        { id:20, name: 'Poppadom', price: 0.55},

      ]
    }
    $scope.total = 0;

    $scope.addItem = function(item){
      $scope.total += item.price;
      item.count = item.count ? item.count+1 : 1
    }

    $scope.getBillTotal = function(){
      return $scope.total;
    }

    $scope.clearAll = function(){
    	_.forEach($scope.items,function(course) {
        _.forEach(course,function(item) {
            item.count = 0;
        })
      })
      $scope.total = 0;
    }

    $scope.removeItem = function(item){
      $scope.decrementItemCountById(item);
      $scope.total -= item.price;
    }

    $scope.isSubtractAvailable = function(item){
      return !(item.count && item.count > 0);
    }

    // private

    $scope.decrementItemCountById = function(item){
      item.count -= 1;
    }
  });
})();