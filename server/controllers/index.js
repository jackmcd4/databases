var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');


module.exports = {
  messages: {
    get: function(req, res){
      models.messages.get(function(results){
        console.log(req.body["text"]);
        utils.sendResponse(results.response, results.data, results.statusCode);
      });
    },
    post: function(req, res){

    }
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


















































// get: function (req, res) {
//     console.log('INTO CONTROLLER')
//       res.responseCode = 200;
//       console.log(models.messages)
//       models.messages['get'](req, res, utils.sendResponse);
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       // collect data
//       utils.collectData(req, function(data){
//         res.responseCode = 302;
//         models.messages['post'](res, data, utils.sendResponse)
//       });
//     } // a function which handles posting a message to the database



















//not found function?

// var sendResponse = function(res){
//   res.writeHead(res.responseCode, headers);
//   if (res._data){
//     res.end(res._data);
//   } else {
//     res.end();
//   }
// };

// var collectData = function(req, callback){
//   var body = '';
//   req.on('data', function(chunk){
//     body+=chunk;
//   });
//   req.on('end', function(){

//     callback(body);
//   });

// };





