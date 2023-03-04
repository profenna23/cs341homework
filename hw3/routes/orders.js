// Chiara Profenna
var dbms = require('./dbms_promise');
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

  // hardcoded month selection
  var selectedMonth = "DEC";

  // returns promise
  let myPromise = dbms.dbquery("SELECT QUANTITY, TOPPING FROM ORDERS WHERE MONTH=\""+selectedMonth+"\";");

  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(rows) {

        //convert rows into a structure like dummy data above
        // FOR TESTING, DEC RETURNS 2 PLAIN 1 CHOC

       console.log("query came back");
       console.log(rows[0]);

       const data = [
                         /*{
                         "topping": "cherry",
                         "quantity": "2",
                         }
                         */
                       ]
       console.log(data);
       //for loop over rows, add to data
       for (let i = 0; i < rows.length; i++) {
         //row[i].QUANTITY;
         data.push({
                    "topping": rows[i].TOPPING,
                    "quantity": rows[i].QUANTITY,
                    });
       }

       console.log(data);
       console.log("goodbye");

       //create json obj and parse string
       const json = JSON.stringify(data);


       // add headers
       res.setHeader("Content-Type", "application/json");
       res.setHeader("Access-Control-Allow-Origin", "*");

        // return json obj
        res.write(json);
res.end(); },
    function(error) { /* code if some error */ }
  );


});

module.exports = router;