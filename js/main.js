//Iteration function of questions 1-4
$.each([1, 2, 3, 4, 5], function(i) {
  $("#correct" + i).click(function() {
    $("#correct" + i).addClass("correct");
    $("#fighting").addClass("hidden");
    $("#winning").removeClass("hidden");
    setTimeout(function(){
      $("#question" + i).addClass("hidden");
      $("#answers" + i).addClass("hidden");
      $("#question" + (i + 1)).removeClass("hidden");
      $("#answers" + (i + 1)).removeClass("hidden");
      $("#fighting").removeClass("hidden");
      $("#winning").addClass("hidden");
    }, 2000);
  });
  $("#answers" + i + " .answer").click(function() {
    $("#correct" + i).addClass("correct");
    $("#fighting").addClass("hidden");
    $("#losing").removeClass("hidden")
  });
});
//click function for the last question
$("#answers5 .answer").click(function(){
  $("#correct5").addClass("correct");
})
