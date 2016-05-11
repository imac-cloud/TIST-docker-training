const db = require('./db');
const Promise = require('promise');

function Weather() {
  this.result = {};
}

Weather.prototype.now = function (callback) {
  const promise = new Promise(function (resolve, reject) {
    db.query('SELECT * FROM weather.`weather` group by `id` DESC LIMIT 1;', function(err, res){
      if (res.length > 0) {
        const result = {
          id: res[0].id,
          time: res[0].time,
          centigrade: res[0].centigrade,
          fahrenheit: res[0].fahrenheit,
          weather: res[0].weather,
          wind_direction: res[0].wind_direction,
          wind_power: res[0].wind_power,
          visibility: res[0].visibility,
          humidity: res[0].humidity,
          rainfall: res[0].rainfall
        };
        return resolve(result);
      } else {
        this.result = {};
      }
    });
  });
  promise.then((result) => {
    this.result = result;
    callback(result);
  });
}

module.exports = Weather;
