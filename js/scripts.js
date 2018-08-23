function generate(num) {
  var numbers = [];
  for (var i = -1; i < num; i++) {
    numbers.push(i + 1);
    // console.log(numbers);
  }
    return numbers
  }


function change(number) {
  var numbers2 = [];
  var string = number.toString();
  var breaker = string.slice();
  var zero = breaker.includes("0");
  var one = breaker.includes("1");

  if (zero === true) {
    var beep = string.replace(number, "beep");
    console.log(beep);
    return beep
  }
  else {
    console.log(number);
    return number
  }
}

change(10);
change(20);
change(32);
