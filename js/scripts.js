var result = " "

var underScores = function(string) {
  var addTheUnders = 3 - string.length;
  for (var i = 0; i<addTheUnders; i++) {
    string= "_" + string;
    console.log(string);
  };

var pos0 = parseInt(string.charAt(0));
var pos1 = parseInt(string.charAt(1));
var pos2 = parseInt(string.charAt(2));

console.log(pos0);
console.log(pos1);
console.log(pos2);

};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    result = "";
    var input = ($("#input").val());
    underScores(input);
    $("#result").text(result);
  });
});
