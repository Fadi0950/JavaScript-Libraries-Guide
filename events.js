// $(document).ready(function(){
//   $("input").blur(function(){
//   alert("focus on the text!!!");
//   });
// });
//
// $(document).ready(function(){
//   $("input").change(function(){
//   alert("text change and its change event");
//   });
// });
//
//
// $(document).ready(function(){
//   $("p").hover(function(){
//     $("p").css("background","green");
//   },function(){
//     $("p").css("background-color","orange");
//   });
//
// });

// $(document).ready(function(){
//   $("input").keydown(function(){
//     $("input").css("background-color","blue");
//   });
//
//   $("input").keyup(function(){
//     $("input").css("background-color","red");
//   });
// });

// i = 0;
// $(document).ready(function(){
//   $("input").keypress(function(){
//   $("span").text(i += 1);
//   });
// });

// $(document).ready(function(){
// $("p").mouseup(function(){
//   $("p").css("background-color","blue")
// });
// $("p").mouseleave(function(){
//   $("p").css("background-color","yellow");
// });
//
// });

$(document).ready(function(){
  $("p").on("click",function(){
    $("p").css("background-color","red");
  });
});
