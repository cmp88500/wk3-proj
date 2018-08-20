// FRONT END
$(document).ready(function() {
 $("#form").submit(function(event) {
   event.preventDefault();
   var varOne = ($("#input").val());
   $("#result").text(moduloCal());

// BACK END
function moduloCal() {
  var modulo = varOne % 3;
  var one = varOne.match(/[1]/g);
  var zero = varOne.match(/[0]/g);

  if (modulo === 0) {
    var modResult = varOne.replace(varOne, "Sorry Dave" );
    return modResult }
  else if (one > 0) {
    var oneLook = varOne.replace(varOne, "boop" );
    return oneLook }
  else if (zero > 0) {
    var zeroLook = varOne.replace(varOne, "beep" );
    return zeroLook }
  else {
    return varOne
  }
}



 });
});
