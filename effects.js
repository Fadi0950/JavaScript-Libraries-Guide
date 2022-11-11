// $(document).ready(function(){
//   $(".btn1").click(function(){
//     $(".box").animate({height:"400px"});
//   });
//   $(".btn2").click(function(){
//     $(".box").animate({width:"400px"});
//   });
//   $(".btn3").click(function(){
//     $(".box").animate({width:"100px",height:"100px"});
//   });
// });

// $(document).ready(function(){
//   // $(".btn1").click(function(){
//   //   $(".box").animate({height:"400px"});
//   // });
//   $(".btn4").click(function(){
//     $(".box").animate({height:"600px"},1500);
//     $(".box").animate({width:"400px"},1500);
//     $(".box").animate({width:"100px"},1500);
//     $(".box").animate({width:"300px"},1500);
//   });
//   $(".btn5").click(function(){
//     $(".box").clearQueue();
//   });
// });

// $(document).ready(function(){
//   $(".divloop").click(function(){
//    $(".box1").delay("slow").fadeIn();
//    $(".box2").delay("fast").fadeIn();
//    $(".box3").delay(2000).fadeIn();
//    $(".box4").delay(1000).fadeIn();
//   });
// });

// $(document).ready(function(){
//   $(".para").delay(1000).fadeIn();
// });

// $(document).ready(function(){
//   $(".btn6").click(function(){
//   var div = $(".box5");
//   div.animate({height:"300"},"slow");
//   div.animate({width:"300"},"slow");
//   div.queue(function(){
//     div.css("background-color","red");
//     div.dequeue();
//   });
//   div.animate({width:"100"});
//   div.animate({height:"100"});
//
//   });
//
// });



// $(document).ready(function(){
//   $(".btn7").click(function(){
//     $(".box5").fadeOut(200);
//   });
//   $(".btn8").click(function(){
//     $(".box5").fadeIn(200);
//   });
// });


// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $("#p").fadeTo(1000,0.2);
//   });
// });


// $(document).ready(function(){
//   $(".btn1").click(function(){
//   $(".div1").fadeToggle(200);
//   $(".div2").fadeToggle(400);
//   $(".div3").fadeToggle(600);
//
//   });
// });


$(document).ready(function(){
  $(".btn1").click(function(){
  $(".div3").animate({height:300},2000);
  $(".div3").animate({width:300},2000);
  });
  $(".btn2").click(function(){
    $(".div3").hide();
  });
  $(".btn3").click(function(){
    $(".div3").stop();
  });
});
