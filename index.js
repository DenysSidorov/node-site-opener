var request = require('request');
var express = require('express');
var app = express();

var getSite =  function(){
  var times = 0;
  request(process.env.SITE, function (error, response, body) {
    if (error) {
      console.log("Error: " + error);
    }

    times++
    console.log(times, ' times');
  })
};

setInterval(getSite ,1000*60*25);
setTimeout(getSite ,3000);


var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express server listening on port ' + port);
