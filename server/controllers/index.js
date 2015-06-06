var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      res.responseCode = 200;
      models.messages[get](req, res, sendResponse);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // collect data
      collectData(req, function(data){
        res.responseCode = 302;
        models.messages[post](res, data, sendResponse)
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.responseCode = 200;
        // res.writeHead(res.responseCode, headers);
        // res.end()
    },
    post: function (req, res) {
      res.responseCode = 302;
        // res.writeHead(res.responseCode, headers);
        // res.end()

    }
  }

};

//not found function?

var sendResponse = function(res){
  res.writeHead(res.responseCode, headers);
  if (res._data){
    res.end(res._data);
  } else {
    res.end();
  }
};

var collectData = function(req, callback){
  var body = '';
  req.on('data', function(chunk){
    body+=chunk;
  });
  req.on('end', function(){

    callback(body);
  });

};





