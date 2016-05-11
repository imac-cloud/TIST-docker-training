const request = require("request");
const cheerio = require("cheerio");
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '<public_ip>',
  user     : 'imac',
  password : 'imac',
  database : 'weather'
});
connection.connect();

request({
  url: "http://www.cwb.gov.tw/V7/observe/24real/Data/46749.htm",
  method: "GET"
}, function(e,r,b) {
  if(e || !b) { return; }
  const $ = cheerio.load(b);
  const time = $($("tr th")[11]).text();
  const centigrade = $($("td.temp1")[0]).text();
  const fahrenheit = $($("td.temp2")[0]).text();
  const weather = $($("tr td")[2]).text();
  const wind_direction = $($("tr td")[3]).text();
  const wind_power = $($("tr td")[4]).text();
  const visibility = $($("tr td")[6]).text();
  const humidity = $($("tr td")[7]).text();
  const rainfall = $($("tr td")[9]).text();
  const data = {
    time: time,
    centigrade: centigrade,
    fahrenheit: fahrenheit,
    weather: weather,
    wind_direction: wind_direction,
    wind_power: wind_power,
    visibility: visibility,
    humidity: humidity,
    rainfall: rainfall
  };
  connection.query('SELECT COUNT(*) AS result FROM `weather` WHERE `time` = ?', time, function(error,result){
        if(result[0]['result']==0){
      connection.query('INSERT INTO `weather` SET ?', data, function(err, result) {
      });
      connection.end();
    }else{
      connection.end();
    }
  });
});
