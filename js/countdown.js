function countdown() {
  var wedding = new Date(2017, 7, 24);
  var difference = wedding.getTime() - Date.now();
  return Math.floor(difference / 1000 / 60 / 60 / 24);
}

$(document).ready(function() {
  /*$('#dateTime').text(countdown());*/
  $('#dateTime').text(countdown() + " DAYS TO GO!!");
});
