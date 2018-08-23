//BUSINESS LOGIC
var generate = function(num) {
  var numbers = [];

  for (var i=0; i <= num; i++) {
    if (i % 3 === 0) {
      numbers.splice(i, 0, "I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (i.toString().includes("1")) {
      numbers.splice(i, 0, "Boop!");
    }
    else if (i.toString().includes("0")) {
      numbers.splice(i, 0, "Beep!");
    }
    else {
      numbers.push(i);
    }
  }
  return numbers;
}

//FRONT END LOGIC
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#result").empty()
    var input = parseInt($("#input").val());
    var loops = generate(input);
    loops.forEach(function(loop) {
      $("#result").append("<li><span class='list'>" + loop + "</span></li>")
    });
  });
});
