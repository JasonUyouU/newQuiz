//Iteration function of questions 1-4
$.each([1, 2, 3, 4, 5], function(i) {
  $("#correct" + i).click(function() {
    $("#correct" + i).addClass("correct");
    $("#fighting").addClass("hidden");
    $("#winning").removeClass("hidden");
    $("#sound1").get(0).play();
    setTimeout(function(){
      $("#question" + i).addClass("hidden");
      $("#answers" + i).addClass("hidden");
      $("#question" + (i + 1)).removeClass("hidden");
      $("#answers" + (i + 1)).removeClass("hidden");
      $("#fighting").removeClass("hidden");
      $("#winning").addClass("hidden");
    }, 2000);
    $("#prize" + i).addClass("flash bgcolor");
  });
  $("#answers" + i + " .answer:not(#correct" + i + ")").click(function() {
    $("#correct" + i).addClass("correct");
    $("#fighting").addClass("hidden");
    $("#losing").removeClass("hidden");
    $("#sound2").get(0).play();
  });
});
//click function for the last question
$("#correct5").click(function() {
  $("#correct5").addClass("correct");
  $("#fighting").addClass("hidden");
  $("#victory").removeClass("hidden");
  $("#prize5").addClass("flash bgcolor");
  $("#sound3").get(0).play();
})
$("#answers5 .answer:not(#correct5)").click(function(){
  $("#correct5").addClass("correct");
  $("#fighting").addClass("hidden");
  $("#losing").removeClass("hidden");
  $("#sound2").get(0).play();
});
