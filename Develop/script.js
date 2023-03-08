// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var currentTime = dayjs().hour();

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  function start() {
    // Creation of container
    for (var i = 8; i <=19; i++) {
      var div = $("<div>");
      var hourEl = $("<div>");
      var textarea = $("<textarea>");
      var icon = $("<i>");
      var btn = $("<button>");

    // Assigning styles 
    div.addClass("row time-block");
    hourEl.addClass("col-2 col-md-1 hour text-center py-3");
    textarea.addClass("col-8 col-md-1 description");
    btn.addClass("btn saveBtn col-2 col-md-1");
    icon.addClass("fas fa-save");

    // AM or PM
    var timeOfDay;

    if (i >= 12) {
      timeOfDay = "PM";
    } else {
      timeOfDay = "AM"
    }

    var text = i;
    if(i === 13) {
      text = 1;
    }
    if(i === 14) {
      text = 2;
    }
    if(i === 15) {
      text = 3;
    }
    if(i === 16) {
      text = 4;
    }
    if(i === 17) {
      text = 5;
    }
    if(i === 18) {
      text = 6;
    }
    if(i === 19) {
      text = 7;
    }

    div.attr("id", i);
    hourEl.text(text + timeOfDay);

    // Red green or gray?
    if (currentTime === i) {
      div.addClass("present");
    } else if (currentTime > i) {
      div.addClass("past");
    } else {
      div.addClass("future");
    }
    
    btn.on("click", click);
    btn.append(icon);
    div.append(hourEl, textarea, btn);
    $(".container-fluid").append(div);
    }
  } 
  // Storing in local storage when save button is clicked
    function click() {
      localStorage.setItem (
      $(this).parent().attr("id"),
      $(this).siblings("textarea").val()
      );
    }
    start();
});
