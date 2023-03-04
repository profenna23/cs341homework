// Chiara Profenna
var dbms = require('./dbms_promise');
var express = require('express');
var router = express.Router();

/* POST new order */
router.post('/', function(req, res, next) {

  var ORDERID = 11;
  var MONTH = "DEC";
  var DAY = 1;

  // FROM THE POST REQUEST
  var QUANTITY = 1;
  var TOPPING = 1;
  var NOTES = "extra yummy";


  // add new order to database

  let myNewPromise = dbms.dbquery("INSERT INTO ORDERS VALUES ('"+ORDERID+"', '"+MONTH+"', '"+DAY+"', '"+QUANTITY+"', '"+TOPPING+"', '"+NOTES+"');");

  /*myNewPromise.then(
    function() {
      console.log("new order added");
      res.end();
    },
  );*/
  res.end();

});

module.exports = router;