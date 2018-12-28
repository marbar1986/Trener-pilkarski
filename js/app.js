$(function() {

    console.log($(window).width());

  // MENU

if($(window).width() < 1200){
$(".menu__list").css("display","none");
$(".menu__button").css("display","block");
var button_count = 0;
$(".menu__button").on("click",function(){
  if(button_count<1){
  $(".menu__list").addClass("menu__list2");
  $(".menu__list").removeClass("menu__list");
  $(".menu__list2").css("display","inline_block");
  $(".menu__list2").removeClass("menu__list");
  $(".menu__list2").css("display","inline-block");
  var all_menu_items2 = $(".menu__list2 li a");
  all_menu_items2.on("mouseenter",function(){
    clearInterval(ball_animation2);
    $(".ball__pic2").remove();
    $(this).prepend(ball_create2);
    startBallAnimation2();
  })
  all_menu_items2.on("mouseleave",function(){
    clearInterval(ball_animation2);
    $(".ball__pic2").remove();
  })
  button_count++;
}else{
  $(".menu__list2").css("display","none");
  button_count--;
}
})
}else{
  var all_menu_items = $(".menu__list li a");
  all_menu_items.on("mouseenter",function(){
    $(this).prepend(ball_create);
  startBallAnimation();
  })
  all_menu_items.on("mouseleave",function(){
    clearInterval(ball_animation);
    $(".ball__pic").remove();
  })
}


$(window).on('resize', function(){
location.reload();
});

  var ball_create = $("<div>",{
    class:"ball__pic",
  })
  var ball_create2 = $("<div>",{
    class:"ball__pic2",
  })


var position= 30;
var ball_animation;

function startBallAnimation(){
  ball_animation = setInterval ( () => {

$(".ball__pic").css("background",`url("./images/ball_animation/ball_all2.png")-${position}px 0px`);

if (position < 120)
{ position = position + 30;}
else{
  position=0;
}
}, 50);
}


var ball_animation2;

function startBallAnimation2(){
  ball_animation2 = setInterval ( () => {

$(".ball__pic2").css("background",`url("./images/ball_animation/ball_all2.png")-${position}px 0px`);

if (position < 120)
{ position = position + 30;}
else{
  position=0;
}
}, 50);
}

  //SPRINT PLAYER

  var sprint_player_position= 0;
  var sprint_player_step= 75;
  var sprint_player_max= 150;
  var sprint_player_step2= 37.5;
  var sprint_player_max2= 75;
  var sprint_player_step3= 18;
  var sprint_player_max3= 37;
  var sprint_player;
  var sprint_player_pic = "sprint_all";
  var sprint_player_pic2 = "sprint_all2";
  var sprint_player_pic3 = "sprint_all3";
  function sprintPlayer(step,max,picture){
    sprint_player = setInterval ( () => {

  $(".sprint_player").css("background",`url("./images/${picture}.png")-${sprint_player_position}px 0px`);

  if (sprint_player_position < max)
  { sprint_player_position = sprint_player_position + step}
  else{
    sprint_player_position=0;
  }
}, 100);
  }
if($(window).width() > 800){
sprintPlayer(sprint_player_step,sprint_player_max,sprint_player_pic);
}
else if($(window).width() < 800 && $(window).width() >= 400){
  sprintPlayer(sprint_player_step2,sprint_player_max2,sprint_player_pic2);
}
else if($(window).width() < 400){
  sprintPlayer(sprint_player_step3,sprint_player_max3,sprint_player_pic3);
}
  //ANIMATION GOALIE

  var goalie_position= 0;
  var goalie_step = 250;
  var goalie_max = 1000;
  var goalie_step2 = 125;
  var goalie_max2 = 500;
  var goalie_step3 = 62.5;
  var goalie_max3 = 250;
  var goalie;
  var goalie_pic = "goalie_all";
  var goalie_pic2 = "goalie_all2";
  var goalie_pic3 = "goalie_all3";
  function goalie(step,max,picture){
    goalie = setInterval ( () => {
  $(".reflex__cloud__goalie").css("background",`url("./images/${picture}.png")-${goalie_position}px 0px`);

  if (goalie_position < max)
  { goalie_position = goalie_position + step}
  else{
    goalie_position=0;
  }
}, 200);
  }
if($(window).width() >= 800){
  goalie(goalie_step,goalie_max,goalie_pic);
}
else if($(window).width() < 800  && $(window).width() >= 400 ){
  goalie(goalie_step2,goalie_max2,goalie_pic2);
}
else if($(window).width() < 400){
  goalie(goalie_step3,goalie_max3,goalie_pic3);
}

  //STRENGTH ANIMATION

  var strenght_position= 0;
  var strenght;
  var strenght_pic = "strengh_all";
  var strenght_step = 250;
  var strenght_max = 500;
  var strenght_pic2 = "strengh_all2";
  var strenght_step2 = 125;
  var strenght_max2 = 250;
  var strenght_pic3 = "strengh_all3";
  var strenght_step3 = 62.5;
  var strenght_max3 = 125;
  function strenght(step,max,picture){
    strength = setInterval ( () => {

  $(".strenght__cloud__animation").css("background",`url("./images/${picture}.png")-${strenght_position}px 0px`);

  if (strenght_position < max)
  { strenght_position = strenght_position + step;}
  else{
    strenght_position=0;
  }
  }, 200);
  }

if($(window).width() >= 800){
  strenght(strenght_step,strenght_max,strenght_pic);
}
else if($(window).width() < 800 && $(window).width() >= 400){
  strenght(strenght_step2,strenght_max2,strenght_pic2);
}
else if($(window).width() < 400){
  strenght(strenght_step3,strenght_max3,strenght_pic3);
}
  //SPEED ANIMATION

  var speed_position= 0;
  var speed;
  var speed_pic = "run_all";
  var speed_step = 250;
  var speed_max = 750;
  var speed_pic2 = "run_all2";
  var speed_step2 = 125;
  var speed_max2 = 375;
  var speed_pic3 = "run_all3";
  var speed_step3 = 62.5;
  var speed_max3 = 187.5;

  function speed(step,max,picture){
    speed = setInterval ( () => {

  $(".speed__cloud__animation").css("background",`url("./images/${picture}.png")-${speed_position}px 0px`);

  if (speed_position < max)
  { speed_position = speed_position + step;}
  else{
    speed_position=0;
  }
}, 100);
  }
  if($(window).width() > 800){
  speed(speed_step,speed_max,speed_pic);
}
else if($(window).width() < 800 && $(window).width() >= 400){
  speed(speed_step2,speed_max2,speed_pic2);
}
else if($(window).width() < 400){
  speed(speed_step3,speed_max3,speed_pic3);
}

  //DRIBBLE ANIMATION

  var dribble_position= 0;
  var dribble;
  var dribble_pic = "dribble_all";
  var dribble_step = 250;
  var dribble_max = 500;
  var dribble_pic2 = "dribble_all2";
  var dribble_step2 = 125;
  var dribble_max2 = 250;
  var dribble_pic3 = "dribble_all3";
  var dribble_step3 = 62.5;
  var dribble_max3 = 125;
  function dribble(step,max,picture){
    dribble = setInterval ( () => {

  $(".dribble__cloud__animation").css("background",`url("./images/${picture}.png")-${dribble_position}px 0px`);

  if (dribble_position < max)
  { dribble_position = dribble_position + step;}
  else{
    dribble_position=0;
  }
}, 150);
  }
if($(window).width() > 800){
  dribble(dribble_step,dribble_max,dribble_pic);
}
else if($(window).width() < 800 && $(window).width() >= 400){
  dribble(dribble_step2,dribble_max2,dribble_pic2);
}
else if($(window).width() < 400){
  dribble(dribble_step3,dribble_max3,dribble_pic3);
}
  //PASS ANIMATION

  var pass_position= 0;
  var pass;
  var pass_pic = "pass_all";
  var pass_step = 250;
  var pass_max = 1250;
  var pass_pic2 = "pass_all2";
  var pass_step2 = 125;
  var pass_max2 = 625;
  var pass_pic3 = "pass_all3";
  var pass_step3 = 62.5;
  var pass_max3 = 312.5;

  function pass(step,max,picture){
    pass = setInterval ( () => {

  $(".pass__cloud__animation").css("background",`url("./images/${picture}.png")-${pass_position}px 0px`);

  if (pass_position < max)
  { pass_position = pass_position + step;}
  else{
    pass_position=0;
  }
}, 150);
  }
  if($(window).width() > 800){
    pass(pass_step,pass_max,pass_pic);
  }
  else if($(window).width() < 800 && $(window).width() >= 400){
    pass(pass_step2,pass_max2,pass_pic2);
  }
  else if($(window).width() < 400){
    pass(pass_step3,pass_max3,pass_pic3);
  }

  //LONG-PASS ANIMATION

  var longPass_position= 0;
  var longPass;
  var longPass_pic = "long_pass_all";
  var longPass_step = 250;
  var longPass_max = 1500;
  var longPass_pic2 = "long_pass_all2";
  var longPass_step2 = 125;
  var longPass_max2 = 750;
  var longPass_pic3 = "long_pass_all3";
  var longPass_step3 = 62.5;
  var longPass_max3 = 375;

  function longPass(step,max,picture){
    longPass = setInterval ( () => {

  $(".long__pass__cloud__animation").css("background",`url("./images/${picture}.png")-${longPass_position}px 0px`);

  if (longPass_position < max)
  { longPass_position = longPass_position + step;}
  else{
    longPass_position=0;
  }
}, 150);
  }
  if($(window).width() > 800){
    longPass(longPass_step,longPass_max,longPass_pic);
  }
  else if($(window).width() < 800 && $(window).width() >= 400){
    longPass(longPass_step2,longPass_max2,longPass_pic2);
  }
  else if($(window).width() < 400){
    longPass(longPass_step3,longPass_max3,longPass_pic3);
  }

  //SHOT ANIMATION

  var shot_position= 0;
  var shot;
  var shot_pic = "shot_all";
  var shot_step = 250;
  var shot_max = 1250;
  var shot_pic2 = "shot_all2";
  var shot_step2 = 125;
  var shot_max2 = 625;
  var shot_pic3 = "shot_all3";
  var shot_step3 = 125;
  var shot_max3 = 625;

  function shot(step,max,picture){
    shot = setInterval ( () => {

  $(".shot__cloud__animation").css("background",`url("./images/${picture}.png")-${shot_position}px 0px`);

  if (shot_position < max)
  { shot_position = shot_position + step;}
  else{
    shot_position=0;
  }
}, 150);
  }
  if($(window).width() > 800){
    shot(shot_step,shot_max,shot_pic);
  }
  else if($(window).width() < 800 && $(window).width() >= 400){
    shot(shot_step2,shot_max2,shot_pic2);
  }
  else if($(window).width() < 400){
    shot(shot_step3,shot_max3,shot_pic3);
  }

  //HEADER ANIMATION

  var headers_position= 0;
  var headers;
  var headers_pic = "headers_all";
  var headers_step = 250;
  var headers_max = 1250;
  var headers_pic2 = "headers_all2";
  var headers_step2 = 125;
  var headers_max2 = 625;
  var headers_pic3 = "headers_all3";
  var headers_step3 = 62.5;
  var headers_max3 = 312.5;

  function headers(step,max,picture){
    header = setInterval ( () => {

  $(".headers__cloud__animation").css("background",`url("./images/${picture}.png")-${headers_position}px 0px`);

  if (headers_position < max)
  { headers_position = headers_position + step;}
  else{
    headers_position=0;
  }
}, 150);
  }
  if($(window).width() > 800){
    headers(headers_step,headers_max,headers_pic);
  }
  else if($(window).width() < 800 && $(window).width() >= 400){
    headers(headers_step2,headers_max2,headers_pic2);
  }
  else if($(window).width() < 400){
    headers(headers_step3,headers_max3,headers_pic3);
  }

  //TACTIC ANIMATION

  var tactic_position= 0;
  var tactic;
  var tactic_pic = "tactic_all";
  var tactic_step = 250;
  var tactic_max = 750;
  var tactic_pic2 = "tactic_all2";
  var tactic_step2 = 125;
  var tactic_max2 = 375;
  var tactic_pic3 = "tactic_all3";
  var tactic_step3 = 62.5;
  var tactic_max3 = 187.5;

  function tactic(step,max,picture){
    tactic = setInterval ( () => {

  $(".tactic__cloud__animation").css("background",`url("./images/${picture}.png")-${tactic_position}px 0px`);

  if (tactic_position < max)
  { tactic_position = tactic_position + step;}
  else{
    tactic_position=0;
  }
}, 200);
  }
  if($(window).width() > 800){
    tactic(tactic_step,tactic_max,tactic_pic);
  }
  else if($(window).width() < 800 && $(window).width() >= 400){
    tactic(tactic_step2,tactic_max2,tactic_pic2);
  }
  else if($(window).width() < 400){
    tactic(tactic_step3,tactic_max3,tactic_pic3);
  }


  //SCROLL

  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if($(window).width() > 800){
    if(scrollTop > 0){
      $(".reflex__cloud").css("margin-left","-55%");
      $(".reflex__cloud").css("transition","margin-left 0.5s");
      $(".reflex__text").css("margin-right","-55%");
      $(".reflex__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 160){
      $(".reflex__cloud").css("margin-left","5%");
      $(".reflex__cloud").css("transition","margin-left 0.5s");
      $(".reflex__text").css("margin-right","5%");
      $(".reflex__text").css("transition","margin-right 1.5s");
      $(".strenght__cloud").css("margin-right","-55%");
      $(".strenght__cloud").css("transition","margin-right 0.5s");
      $(".strenght__text").css("margin-left","-55%");
      $(".strenght__text").css("transition","margin-left 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 460){
      $(".reflex__cloud").css("margin-left","-55%");
      $(".reflex__cloud").css("transition","margin-left 0.5s");
      $(".reflex__text").css("margin-right","-55%");
      $(".reflex__text").css("transition","margin-right 1.5s");
      $(".strenght__cloud").css("margin-right","5%");
      $(".strenght__cloud").css("transition","margin-right 0.5s");
      $(".strenght__text").css("margin-left","5%");
      $(".strenght__text").css("transition","margin-left 1.5s");
      $(".speed__cloud").css("margin-left","-55%");
      $(".speed__cloud").css("transition","margin-left 0.5s");
      $(".speed__text").css("margin-right","-55%");
      $(".speed__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 760){
      $(".strenght__cloud").css("margin-right","-55%");
      $(".strenght__cloud").css("transition","margin-right 0.5s");
      $(".strenght__text").css("margin-left","-55%");
      $(".strenght__text").css("transition","margin-left 1.5s");
      $(".speed__cloud").css("margin-left","5%");
      $(".speed__cloud").css("transition","margin-left 0.5s");
      $(".speed__text").css("margin-right","5%");
      $(".speed__text").css("transition","margin-right 1.5s");
      $(".dribble__cloud").css("margin-right","-55%");
      $(".dribble__cloud").css("transition","margin-right 0.5s");
      $(".dribble__text").css("margin-left","-55%");
      $(".dribble__text").css("transition","margin-left 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 1060){
      $(".speed__cloud").css("margin-left","-55%");
      $(".speed__cloud").css("transition","margin-left 0.5s");
      $(".speed__text").css("margin-right","-55%");
      $(".speed__text").css("transition","margin-right 1.5s");
      $(".dribble__cloud").css("margin-right","5%");
      $(".dribble__cloud").css("transition","margin-right 0.5s");
      $(".dribble__text").css("margin-left","5%");
      $(".dribble__text").css("transition","margin-left 1.5s");
      $(".pass__cloud").css("margin-left","-55%");
      $(".pass__cloud").css("transition","margin-left 0.5s");
      $(".pass__text").css("margin-right","-55%");
      $(".pass__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 1360){
      $(".dribble__cloud").css("margin-right","-55%");
      $(".dribble__cloud").css("transition","margin-right 0.5s");
      $(".dribble__text").css("margin-left","-55%");
      $(".dribble__text").css("transition","margin-left 1.5s");
      $(".pass__cloud").css("margin-left","5%");
      $(".pass__cloud").css("transition","margin-left 0.5s");
      $(".pass__text").css("margin-right","5%");
      $(".pass__text").css("transition","margin-right 1.5s");
      $(".long__pass__cloud").css("margin-right","-55%");
      $(".long__pass__cloud").css("transition","margin-right 0.5s");
      $(".long__pass__text").css("margin-left","-55%");
      $(".long__pass__text").css("transition","margin-left 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 1660){
      $(".pass__cloud").css("margin-left","-55%");
      $(".pass__cloud").css("transition","margin-left 0.5s");
      $(".pass__text").css("margin-right","-55%");
      $(".pass__text").css("transition","margin-right 1.5s");
      $(".long__pass__cloud").css("margin-right","5%");
      $(".long__pass__cloud").css("transition","margin-right 0.5s");
      $(".long__pass__text").css("margin-left","5%");
      $(".long__pass__text").css("transition","margin-left 1.5s");
      $(".shot__cloud").css("margin-left","-55%");
      $(".shot__cloud").css("transition","margin-left 0.5s");
      $(".shot__text").css("margin-right","-55%");
      $(".shot__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 1960){
      $(".long__pass__cloud").css("margin-right","-55%");
      $(".long__pass__cloud").css("transition","margin-right 0.5s");
      $(".long__pass__text").css("margin-left","-55%");
      $(".long__pass__text").css("transition","margin-left 1.5s");
      $(".shot__cloud").css("margin-left","5%");
      $(".shot__cloud").css("transition","margin-left 0.5s");
      $(".shot__text").css("margin-right","5%");
      $(".shot__text").css("transition","margin-right 1.5s");
      $(".headers__cloud").css("margin-right","-55%");
      $(".headers__cloud").css("transition","margin-right 0.5s");
      $(".headers__text").css("margin-left","-55%");
      $(".headers__text").css("transition","margin-left 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 2260){
      $(".shot__cloud").css("margin-left","-55%");
      $(".shot__cloud").css("transition","margin-left 0.5s");
      $(".shot__text").css("margin-right","-55%");
      $(".shot__text").css("transition","margin-right 1.5s");
      $(".headers__cloud").css("margin-right","5%");
      $(".headers__cloud").css("transition","margin-right 0.5s");
      $(".headers__text").css("margin-left","5%");
      $(".headers__text").css("transition","margin-left 1.5s");
      $(".tactic__cloud").css("margin-left","-55%");
      $(".tactic__cloud").css("transition","margin-left 0.5s");
      $(".tactic__text").css("margin-right","-55%");
      $(".tactic__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 2500){
      $(".tactic__cloud").css("margin-left","5%");
      $(".tactic__cloud").css("transition","margin-left 0.5s");
      $(".tactic__text").css("margin-right","5%");
      $(".tactic__text").css("transition","margin-right 1.5s");
      $(".sprint_player").css("position","fixed");
      $(".sprint_player").css("top","180px");
    }
    if(scrollTop > 2600){
      $(".sprint_player").css("position","absolute");
      $(".sprint_player").css("top","2800px");
    }
    }
    else if($(window).width() < 800 && $(window).width() >= 400){
      if(scrollTop > 0){
        $(".reflex__cloud").css("margin-left","-55%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","-55%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 160){
        $(".reflex__cloud").css("margin-left","5%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","5%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".strenght__cloud").css("margin-right","-55%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","-55%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 360){
        $(".reflex__cloud").css("margin-left","-55%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","-55%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".strenght__cloud").css("margin-right","5%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","5%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".speed__cloud").css("margin-left","-55%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","-55%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 560){
        $(".strenght__cloud").css("margin-right","-55%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","-55%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".speed__cloud").css("margin-left","5%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","5%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".dribble__cloud").css("margin-right","-55%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","-55%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 760){
        $(".speed__cloud").css("margin-left","-55%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","-55%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".dribble__cloud").css("margin-right","5%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","5%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".pass__cloud").css("margin-left","-55%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","-55%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 960){
        $(".dribble__cloud").css("margin-right","-55%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","-55%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".pass__cloud").css("margin-left","5%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","5%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".long__pass__cloud").css("margin-right","-55%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","-55%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1160){
        $(".pass__cloud").css("margin-left","-55%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","-55%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".long__pass__cloud").css("margin-right","5%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","5%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".shot__cloud").css("margin-left","-55%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","-55%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1360){
        $(".long__pass__cloud").css("margin-right","-55%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","-55%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".shot__cloud").css("margin-left","5%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","5%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".headers__cloud").css("margin-right","-55%");
        $(".headers__cloud").css("transition","margin-right 0.5s");
        $(".headers__text").css("margin-left","-55%");
        $(".headers__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1560){
        $(".shot__cloud").css("margin-left","-55%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","-55%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".headers__cloud").css("margin-right","5%");
        $(".headers__cloud").css("transition","margin-right 0.5s");
        $(".headers__text").css("margin-left","5%");
        $(".headers__text").css("transition","margin-left 1.5s");
        $(".tactic__cloud").css("margin-left","-55%");
        $(".tactic__cloud").css("transition","margin-left 0.5s");
        $(".tactic__text").css("margin-right","-55%");
        $(".tactic__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1760){
        $(".tactic__cloud").css("margin-left","5%");
        $(".tactic__cloud").css("transition","margin-left 0.5s");
        $(".tactic__text").css("margin-right","5%");
        $(".tactic__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1860){
        $(".sprint_player").css("position","absolute");
        $(".sprint_player").css("top","2060px");
      }
    }
    else if($(window).width() < 400){
      if(scrollTop > 0){
        $(".reflex__cloud").css("margin-left","-55%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","-55%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 160){
        $(".reflex__cloud").css("margin-left","5%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","5%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".strenght__cloud").css("margin-right","-55%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","-55%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 310){
        $(".reflex__cloud").css("margin-left","-55%");
        $(".reflex__cloud").css("transition","margin-left 0.5s");
        $(".reflex__text").css("margin-right","-55%");
        $(".reflex__text").css("transition","margin-right 1.5s");
        $(".strenght__cloud").css("margin-right","5%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","5%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".speed__cloud").css("margin-left","-55%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","-55%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 460){
        $(".strenght__cloud").css("margin-right","-55%");
        $(".strenght__cloud").css("transition","margin-right 0.5s");
        $(".strenght__text").css("margin-left","-55%");
        $(".strenght__text").css("transition","margin-left 1.5s");
        $(".speed__cloud").css("margin-left","5%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","5%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".dribble__cloud").css("margin-right","-55%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","-55%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop >610){
        $(".speed__cloud").css("margin-left","-55%");
        $(".speed__cloud").css("transition","margin-left 0.5s");
        $(".speed__text").css("margin-right","-55%");
        $(".speed__text").css("transition","margin-right 1.5s");
        $(".dribble__cloud").css("margin-right","5%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","5%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".pass__cloud").css("margin-left","-55%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","-55%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 760){
        $(".dribble__cloud").css("margin-right","-55%");
        $(".dribble__cloud").css("transition","margin-right 0.5s");
        $(".dribble__text").css("margin-left","-55%");
        $(".dribble__text").css("transition","margin-left 1.5s");
        $(".pass__cloud").css("margin-left","5%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","5%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".long__pass__cloud").css("margin-right","-55%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","-55%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 910){
        $(".pass__cloud").css("margin-left","-55%");
        $(".pass__cloud").css("transition","margin-left 0.5s");
        $(".pass__text").css("margin-right","-55%");
        $(".pass__text").css("transition","margin-right 1.5s");
        $(".long__pass__cloud").css("margin-right","5%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","5%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".shot__cloud").css("margin-left","-55%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","-55%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1060){
        $(".long__pass__cloud").css("margin-right","-55%");
        $(".long__pass__cloud").css("transition","margin-right 0.5s");
        $(".long__pass__text").css("margin-left","-55%");
        $(".long__pass__text").css("transition","margin-left 1.5s");
        $(".shot__cloud").css("margin-left","5%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","5%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".headers__cloud").css("margin-right","-55%");
        $(".headers__cloud").css("transition","margin-right 0.5s");
        $(".headers__text").css("margin-left","-55%");
        $(".headers__text").css("transition","margin-left 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1210){
        $(".shot__cloud").css("margin-left","-55%");
        $(".shot__cloud").css("transition","margin-left 0.5s");
        $(".shot__text").css("margin-right","-55%");
        $(".shot__text").css("transition","margin-right 1.5s");
        $(".headers__cloud").css("margin-right","5%");
        $(".headers__cloud").css("transition","margin-right 0.5s");
        $(".headers__text").css("margin-left","5%");
        $(".headers__text").css("transition","margin-left 1.5s");
        $(".tactic__cloud").css("margin-left","-55%");
        $(".tactic__cloud").css("transition","margin-left 0.5s");
        $(".tactic__text").css("margin-right","-55%");
        $(".tactic__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1360){
        $(".tactic__cloud").css("margin-left","5%");
        $(".tactic__cloud").css("transition","margin-left 0.5s");
        $(".tactic__text").css("margin-right","5%");
        $(".tactic__text").css("transition","margin-right 1.5s");
        $(".sprint_player").css("position","fixed");
        $(".sprint_player").css("top","180px");
      }
      if(scrollTop > 1460){
        $(".sprint_player").css("position","absolute");
        $(".sprint_player").css("top","1650px");
      }
    }
  })

  $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top - 100
          }, 1000);
      }

  });

  var submit = $(".submit");
  var emailElem = $(".email");
  var nameElem = $(".name");
  var infoElem = $(".textarea");
  var massage = $(".error");

  submit.on('click',function(e){
      e.preventDefault();

      if(emailElem.val().indexOf('@') == -1){
          emailElem.addClass('box-error');
      }else{
          emailElem.removeClass('box-error');
      }
      if( nameElem.val().trim().length <= 6 ){
          nameElem.addClass('box-error');
      }else{
          nameElem.removeClass('box-error');
      }
      if( infoElem.val().trim().length <= 6 ){
          infoElem.addClass('box-error');
      }else{
          infoElem.removeClass('box-error');
      }

      if(emailElem.hasClass("box-error") || nameElem.hasClass("box-error")||infoElem.hasClass("box-error")){
        massage.text("");
        massage.css("color","red");
        massage.text("Wypełnij poprawnie pola z czerwoną ramka");
      }
      else{
        massage.text("");
        massage.css("color","green");
        massage.text("Informacje wysłane poprawnie");
      }
  })

})
