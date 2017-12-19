import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';

const Pic = () => (
  <div>ReactJS is here!
  </div>
);

angular.module('angularApp', [])
  .controller('angularController', function($scope) {
    $scope.greeting = "Hello World from AngularController";
  })
  .directive('reactDirective', function () {
      return {
          template: '<div>Kadaffi</div>',
          link: function (scope, element, attrs)  {
            ReactDOM.render(
              React.createElement(Pic),
              element[0]
            );
          }
      }
  });