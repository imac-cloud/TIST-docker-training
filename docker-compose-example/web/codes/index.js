var weather = angular.module('weather', []);

weather.controller('WeatherController', function ($rootScope, $scope, $http, $interval) {
  getWeather();
  getTime();
  $interval(getWeather, 300000);
  $interval(getTime, 1000);

  function getWeather () {
    $http({
      method: 'GET',
      url: 'http://<public_ip>:3000/now'
    }).then(function successCallback(response) {
      $rootScope.state = {
        centigrade: response.data.centigrade,
        fahrenheit: response.data.fahrenheit,
        humidity: response.data.humidity,
        weather: response.data.weather,
        wind_direction: response.data.wind_direction,
        wind_power: response.data.wind_power,
        time: response.data.time
      }
      $scope.state = $rootScope.state;
    }, function errorCallback(response) {});
  }

  function getTime () {
    const date = new Date();
    $rootScope.time = {
      hour: date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
      minute: date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
      second: date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
    }
    $scope.time = $rootScope.time;
  }
});
