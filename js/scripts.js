$(document).ready(function() {
  $("form#counting").submit(function(event) {

    var countTo = parseFloat($("input#countTo").val());
    var countBy = parseFloat($("input#countBy").val());
    var total = [];

    if (!countTo || !countBy || countTo <= 0 || countBy === 0 || countTo === NaN || countBy === NaN ) {
      // || countTo < countby ) {
    // || !0 || countTo <= 0 || countBy <= 0) {
      alert("Please enter a valid number");
      $("form").removeClass(form-control);
      $("form").addClass(form-control);

    }

    for (var start = countBy; start <= countTo; start += countBy) {

      total.push(start);
    }
    $(".result").text(total);



    event.preventDefault();

  });

});
