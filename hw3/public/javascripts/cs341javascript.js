// Chiara Profenna
// labels all the elements
var submitButton = document.getElementById('button');
var textbox = document.getElementById('textbox');
var totalItems = document.getElementById('totalItems');
var table = document.getElementById('table');
var quantityText = document.getElementById('quantityText');
var ordersHeading = document.getElementById('ordersHeading');
var notesText = document.getElementById('notesText');
var dropdownItem = document.getElementById('dropdownItem');
var topping;
var totalItems = document.getElementById('totalItems');

// get number from dropdown menu
var select = document.getElementById('num-toppings');

// determines which dropdown item the user clicked on and appends to text
function main() {
  $(".dropdown-content").on("click",(function(){
    var selected =$(this).text();
    //to get months working, ask for the text of the element that was clicked

    // POST goes to the orders page reads in JSON obj and replaces bullet pts with JSON obj
    // not passing in any data yet, eventually month
    $.post('/orders', null,
        function(data,status,xhr) {
            // make data readable
            var jsonString = JSON.stringify(data);
            // format string to display json data correctly
            var splitString = jsonString.split("\"")
            var joined = splitString.join(', ');
            var noSpecialChars = joined.replace(/[^a-zA-Z0-9 ]/g, '');
            var omitTopping = noSpecialChars.replaceAll("topping", "<br />");
            var omitQuantity = omitTopping.replaceAll("quantity", " : ");
            // print final formatted string to screen
            totalItems.innerHTML = omitQuantity;
        });
  }));
}

// listen for order button to be pressed
submitButton.addEventListener('click', function handleClick() {

  // get notes
  var notes = document.getElementById("textbox").value;

  // get topping selection
  if(document.getElementById('cherry').checked) {
    topping = document.getElementById("cherry").value;
  }else if(document.getElementById('chocolate').checked) {
    topping = document.getElementById("chocolate").value;
  }else {
    topping = document.getElementById("plain").value;
  }

  // get number of toppings
  var numToppings = select.options[select.selectedIndex].value;

  // if user asks for vegan cheesecake, alert them that cheesecake contains dairy
  // if not, remove all the elements
  if ($('#textbox').val().indexOf('vegan') != -1){
    alert('Cheesecake contains dairy');
  } else if ($('#textbox').val().indexOf('Vegan') != -1){
    alert('Cheesecake contains dairy');
  } else {
    submitButton.remove();
    textbox.remove();
    totalItems.remove();
    table.remove();
    ordersHeading.remove();
    notesText.remove();
    dropdownItem.remove();
    // type thank you message
    quantityText.innerHTML = "Thank you! Your order has been placed." + "<br />" + numToppings + " topping(s)" + "<br />" + topping + "<br />" + notes;
  }

});