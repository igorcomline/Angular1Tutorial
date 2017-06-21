'use strict';

var app = angular.module('tutorialApp', ['ngAnimate','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: '/Scripts/app/article.html' })
        .when('/about', { template: 'Über unsere Pizzeria' })
        .when('/contact', { templateUrl: '/Start/Kontakt' })
        .otherwise({ redirectTo: '/' });
});

app.directive('price', function () {
    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        templateUrl: '/Scripts/app/price.tpl.html'
    };
});

app.factory('Cart', function () {
    var items = [];
    return {
        getItems: function () {
            return items;
        },
        addArticle: function (article) {
            items.push(article);
        },
        sum: function () {
            return items.reduce(function (total, article) {
                return total + article.Price;
            }, 0);
        }
    };
});

// ************ EXPLAIN REDUCE FUNCTION
//Answer: 1 -- > Array.prototype.reduce() is applied against an array, and will subsequently iterate through each and every value until and unless it reduces to one single value.

//    Syntax : arr.reduce(callback, [initialValue])

//Answer: 2 -- > Total is the value that is being returned from the previous iteration, and the second argument refers to the current item [value] in the iteration.

//    Answer : 3 -- > 0 is for the initial value, since we are going to do a sum, we need to initialize the value from 0.

app.controller('ArticlesCtrl', function ($scope, $http, Cart) {

    $scope.cart = Cart;


    //$scope.articles = [
    //    {id:1, name:'Apple', price:3.22},
    //    {id: 2, name: 'Watermelon', price: 2.24},
    //    {id: 3, name: 'Mango', price: 1.98}
    //];

    // $http.get('/api/webapi').then ... will add also header data

    $http.get('/api/webapi').success(function (data) {
        alert(JSON.stringify(data));
        $scope.articles = data;
    });
})

app.controller('CartCtrl', function ($scope, Cart) {
    $scope.cart = Cart;
});

