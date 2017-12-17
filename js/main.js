//Iteration function of questions 1-4
$.each([1, 2, 3, 4, 5], function(i) {
  $("#answers" + i + " .answer").click(function() {
    $("#correct" + i).addClass("correct");
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
  $("#correct5").addClass("correct");
})
