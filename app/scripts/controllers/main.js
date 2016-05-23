'use strict';

/**
 * @ngdoc function
 * @name learnYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnYeomanApp
 */
angular.module('learnYeomanApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    /*1、写死的数据*/
  	/*$scope.todos = ['Item 1', 'Item 2', 'Item 3'];*/
    /*2、本地存储数据*/
    var todosInStore = localStorageService.get('todos');
      $scope.todos = todosInStore && todosInStore.split('\n') || [];
      $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
     }, true);
    /*3、用测试数据*/
      /*$scope.todos = [];*/

     $scope.addTodo = function () {
       $scope.todos.push($scope.todo);
       $scope.todo = '';
     };
     $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
  });
