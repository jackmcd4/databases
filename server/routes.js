var controllers = require('./controllers');
var router = require('express').Router();


// iterates over collection object
// and grabs the get and post functions
// for each
for (var route in controllers) {
  console.log("IN ROUTES");
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

