function generate(num) {
  var numbers = [];
  for (var i = -1; i < num; i++) {
    numbers.push(i + 1);
    // console.log(numbers);
  }
    return numbers
  }
generate(15);
generate(5);

function change(number) {
  var numbers2 = [];
  var string = number.toString();
  var breaker = string.slice();
  var zero = breaker.includes("0");
  var one = breaker.includes("1");
  console.log(zero, one)
}

change(20);
change(25);
change(0);
change(1);
