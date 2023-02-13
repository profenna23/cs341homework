var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
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

  // creat json obj and parse string
  const json = JSON.stringify(array);

  // add headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // return json obj
  res.write(json);
  res.end();

  }
});

module.exports = router;