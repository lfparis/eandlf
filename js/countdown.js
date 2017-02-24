function countdown() {
  var wedding = new Date(2017, 8, 24);
  var today = new Date();
  var difference = wedding.getTime() - today.getTime();
  return Math.floor(difference / 1000 / 60 / 60 / 24);
}

$(document).ready(function() {
  /*$('#dateTime').text(countdown());*/
  $('#dateTime').text(countdown() + " DAYS TO GO!");
});
