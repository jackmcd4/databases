var mysql = require('mysql');

var connection = mysql.createConnection({host: 'localhost',
  user: 'root', password: "", database: 'chat'});

connection.connect(function(err){
  if(err){
    console.log('THIS IS THE ERROR')
    console.log(err)
    return;
  }else{
    console.log('Connected as id ' + connection.threadId);
  }

});

module.exports = connection;








// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


