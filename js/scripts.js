// function change(number) {



function generate(num) {
  var string = num.toString();
  var zero = string.includes("0");
  var one = string.includes("1");
  var numbers = [];
  for (var i = -1; i <= num; i++) {
    console.log(i, i % 3);
//     if (i % 3 === 0) {
//       numbers.splice(i + 1, 0, "Sorry"); }
//     else {
//       numbers.push(i + 1);
//     }
//     console.log(numbers);
  }
}

generate(15);




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
