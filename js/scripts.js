//BUSINESS LOGIC
function generate(num) {
  var numbers = [];
  var string = num.toString();
  var zero = string.includes("0");
  var one = string.includes("1");

  for (var i=0; i <= num; i++) {
    if (i % 3 === 0) {
    numbers.splice(i, 0, "Sorry");
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
    console.log(numbers)
  }

generate(48);

//FRONT END LOGIC
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var result = generate(input);
    console.log(result)
    $("ul#result").append("<li><span class='list'>" + result + "</span></li>")
});
});
