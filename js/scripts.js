$(document).ready(function() {
  var groceriesList = [];

    $("form").submit(function(event) {

      var groceries = $("input#favname").val();

      groceriesList.push(groceries);

      console.log(groceriesList.sort());




$(groceries).show();
$("#list").text(groceriesList);
console.log(groceriesList)

    event.preventDefault();
});
});
