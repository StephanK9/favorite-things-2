$(document).ready(function() {
    $("form").submit(function(event) {
      var nameInput = $("input#favname").val();
      var colorInput = $("input#favcolor").val();
      var cityInput = $("input#favcity").val();

      var favthings = [nameInput, colorInput, cityInput];

favthings.pop();
favthings.reverse();
favthings.push(cityInput);

$(favthings).show();
$("#list").text(favthings);
console.log(favthings)

event.preventDefault();
});
});
