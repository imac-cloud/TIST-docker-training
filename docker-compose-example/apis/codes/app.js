const express = require('express');
const Weather = require('./Weather');
const Promise = require('promise');
const app = express();

const weather = new Weather();

app.get('/now', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  weather.now((result) => {
    res.json(result);
  })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
})
