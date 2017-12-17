//Iteration function of questions 1-4
$.each([1, 2, 3, 4, 5], function(i) {
  $("#answers" + i + " .answer").click(function() {
    $("#answers" + i + " .answer:nth-child(" + i + ")").addClass("correct");
    // $("#correct" + i + ":after").css("background-color", "#ffb344");
    // $("#correct" + i + ":before").css("background-color", "#ffb344");
    // $("#correct" + i + " p").css("color", "black");
    // $("#correct" + i + " span").css("color", "white");
    setTimeout(function(){
      $("#question" + i).addClass("hidden");
      $("#answers" + i).addClass("hidden");
      $("#question" + (i + 1)).removeClass("hidden");
      $("#answers" + (i + 1)).removeClass("hidden");
    }, 2000);
  })
});
//click function for the last question
$("#answers5 .answer").click(function(){
  $("#correct5").css("background-color", "#ffb344");
  $("#correct5 p").css("color", "black");
  $("#correct5 span").css("color", "white");
})
