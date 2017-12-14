$("#answers1 .answer").click(function(){
  $("#correct1").css("background-color", "#ee8722");
  $("#correct1 p").css("color", "black");
  $("#correct1 span").css("color", "white");
  setTimeout(function(){
    $("#question1").addClass("hidden");
    $("#answers1").addClass("hidden");
    $("#question2").removeClass("hidden");
    $("#answers2").removeClass("hidden");
  }, 2000);
})
$("#answers2 .answer").click(function(){
  $("#correct2").css("background-color", "#ee8722");
  $("#correct2 p").css("color", "black");
  $("#correct2 span").css("color", "white");
  setTimeout(function(){
    $("#question2").addClass("hidden");
    $("#answers2").addClass("hidden");
    $("#question3").removeClass("hidden");
    $("#answers3").removeClass("hidden");
  }, 2000);
})
$("#answers3 .answer").click(function(){
  $("#correct3").css("background-color", "#ee8722");
  $("#correct3 p").css("color", "black");
  $("#correct3 span").css("color", "white");
  setTimeout(function(){
    $("#question3").addClass("hidden");
    $("#answers3").addClass("hidden");
    $("#question4").removeClass("hidden");
    $("#answers4").removeClass("hidden");
  }, 2000);
})
$("#answers4 .answer").click(function(){
  $("#correct4").css("background-color", "#ee8722");
  $("#correct4 p").css("color", "black");
  $("#correct4 span").css("color", "white");
  setTimeout(function(){
    $("#question4").addClass("hidden");
    $("#answers4").addClass("hidden");
    $("#question5").removeClass("hidden");
    $("#answers5").removeClass("hidden");
  }, 2000);
})
$("#answers5 .answer").click(function(){
  $("#correct5").css("background-color", "#ee8722");
  $("#correct5 p").css("color", "black");
  $("#correct5 span").css("color", "white");
})
