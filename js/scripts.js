// function change(number) {



function generate(num) {
  var numbers = [];
  var string = num.toString();
  var splitter = string.split();
  var zero = splitter.includes("0");
  var one = splitter.includes("1");
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0) {
      numbers.splice(i, 0, "Sorry"); }
    else if (one === true) {
      numbers.splice(i, 0, "boop");
    }
    else if (zero === true) {
      numbers.splice(i, 0, "beep");
    }
    else {
      numbers.push(i);
    }
    console.log(numbers);
  }
}

generate(12);




//   if (number % 3 === 0) {
//     var sorry = string.replace(number, "I'm sorry, Dave. I'm afraid I can't do that.");
//     console.log(sorry);
//     return sorry
//   }
//   else if (one === true) {
//     var boop = string.replace(number, "boop");
//     console.log(boop);
//     return boop
//   }
//   else if (zero === true) {
//     var beep = string.replace(number, "beep");
//     console.log(beep);
//     return beep
//   }
//   else {
//     console.log(number);
//     return number
//   }
// }
//
// change(10);
// change(20);
// change(32);
// change(21);
