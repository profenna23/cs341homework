// Chiara Profenna
var express = require('express');
var router = express.Router();

/* POST orders listing. */
router.post('/', function(req, res, next) {
  // create array for topping & quantity
  const array = [
                  {
                  "topping": "cherry",
                  "quantity": "2",
                  },
                  {
                  "topping": "plain",
                  "quantity": "6",
                  },
                  {
                  "topping": "chocolate",
                  "quantity": "3",
                  }
                ]

  // Modify this file to access the orders data for the given month from the database and return that data to the client
  // JSON object you construct and return will have the same structure as before
  // each time a different month has been selected a different order summary should be displayed based upon what is in the database
  // server-side javascript should be constructing the SELECT statement and then parsing the results

  // find a way to access what month was clicked

  // THIS IS CODE FOR HW5:
  //var selectedMonth = ?;
  //const data = JSON.dbquery(SELECT QUANTITY, TOPPING FROM ORDERS WHERE MONTH=selectedMonth);
  //create json obj and parse string
  //const json = JSON.stringify(data);

  // create json obj and parse string
  const json = JSON.stringify(array);

  // add headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // return json obj
  res.write(json);
  res.end();

});

module.exports = router;