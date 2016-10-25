$(document).ready(function() {
  $("form#counting").submit(function(event) {

    var countTo = parseFloat($("input#countTo").val());
    var countBy = parseFloat($("input#countBy").val());
    var total = [];

    for (var start = countBy; start <= countTo; start += countBy) {

      total.push(start);
    }
    $(".result").text(total);

    event.preventDefault();
  });

});
