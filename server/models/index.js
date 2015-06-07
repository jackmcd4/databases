var db = require('../db');
var mysql = require('mysql');
var utils = require('../utils');

module.exports = {
  messages: {
    get: function(callback){
      queryString = 'SELECT * from messages';
      db.query = (queryString, function(err, results){
        console.log(results);
        callback(results);
      })
    },
    post: function(params, callback){
      queryString = 'INSERT INTO messages (author, text) values (?, ?)';
      db.query = (queryString, params, function(err, results){
        callback(results);
      })
    }

  },

  users: {
    // Ditto as above.
    get: function (callback) {
      queryString = '';
      db.query = (queryString, function(err, results){
        callback(results);
      })
    },
    post: function (params, callback) {
      queryString = '';
      db.query = (queryString, params, function(err, results){
        callback(results);
      })
    }
  }
};
























































 // get: function (req, res, callback) {
 //      console.log('in model');
 //      var data = db.query("SELECT u.username, m.message FROM messages m INNER JOIN users u on m.author = u.user_id;", function(err, row, fields){
 //        if (err){
 //          callback();
 //        }

 //        console.log('Messages in row 1: ', rows[0]);
 //      });
 //      callback();

 //    }, // a function which produces all the messages
 //    post: function (res, data, callback) {

 //      var authorId = db.query('SELECT user_id FROM users WHERE username = "' + req._postData.username + '"',function(err, rows, fields){
 //        if (err){
 //          db.query('INSERT INTO users (username) VALUES ("' + req._postData.username + '")', function(err, rows, fields){
 //            if (err){
 //              throw err;
 //            }
 //            console("User was added to table: " + rows[0]);
 //          });
 //        }
 //      });

 //      db.query('INSERT INTO messages (author, message) VALUES ("' + author_id +', "' + req._postData.text + '")', function(err, rows, fields){
 //        if (err){
 //          throw err;
 //        }
 //        console("Message was added to table: " + rows[0]);
 //      });

 //      callback();
 //    } // a function which can be used to insert a message into the database
