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

// get number from dropdown menu
var select = document.getElementById('num-toppings');

// determines which dropdown item the user clicked on and appends to text
function myFunction() {
  $(".dropdown-content").on("click",(function(){
    var selected =$(this).text();
    //ordersHeading.append(selected);
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