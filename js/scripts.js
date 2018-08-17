

// BACK END
var result = " "
 var underScores = function(string) {
  var addTheUnders = 3 - string.length;
  for (var i = 0; i<addTheUnders; i++) {
    string= "_" + string;
    console.log(string);
  };

var pos0 = string.charAt(0);
var pos1 = string.charAt(1);
var pos2 = string.charAt(2);
console.log(pos0);
console.log(pos1);
console.log(pos2);

var splits = input.split("");

splits.forEach(function(split, index) {
  if (split === "0") {
    splits[index] = "beep"
  } else {
}

var result = " "
 var underScores = function(string) {
  var addTheUnders = 3 - string.length;
  for (var i = 0; i<addTheUnders; i++) {
    string= "_" + string;
    console.log(string);
  };
};
});
};

// FRONT END
$(document).ready(function() {
 $("#form").submit(function(event) {
   event.preventDefault();
   result = "";
   var input = ($("#input").val());
   underScores(input);
   $("#result").text(splits.join(""));
 });
});
