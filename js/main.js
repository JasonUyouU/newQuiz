document.querySelector(".answer").addEventListener("click", function(){
  $("#question1").addClass("hidden");
  $("#answers1").addClass("hidden");
  $("#question2").removeClass("hidden");
  $("#answers2").removeClass("hidden");
})
