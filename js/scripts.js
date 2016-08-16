$(document).ready(function() {
  var iceCreams = ["chocolate", "vanilla", "strawberry"];
  for (var index = 0; index < iceCreams.length; index += 1)
    $("ul").prepend("<li>" + iceCreams[index] + "</li>");
});
