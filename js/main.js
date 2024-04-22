// event_box2 slick
$('.eb_slider_list').slick({
  arrows: false, // 해당 구역에 절대 ; 쓰면 안된다.
  dots: true,
  autoplay: true, // 마지막에는 , 를 찍어도 되고 안찍어도 된다.
  pauseOnHover: false,
  fade: true,
});

// 정지/재생 버튼
// 버튼.click(어떤일); == > 버튼을 클릭하면 어떤 일이 일어난다.
// 버튼.click(function(){}); == > 어떤일은 함수 'function(){}' 이다.
// .hasClass('active') ==> 앞에 Class라는 명령어가 있기 때문에 클래스 앞에 .을 찍어선 안된다. 
// 버튼이 active라는 class를 가지고 있는가? 가지고 있다면 true, 가지고 있지 않다면 false가 떠야한다.

$(".event_box2 .page_act .btn_stop").click(function (e) {
  e.preventDefault() //a태그로 인해 페이지 상단으로 튕겨지는것을 막는다.
  if ($('.event_box2 .page_act').hasClass("on")) { // on 이라는 클래스를 가지고 있다면
    $('.event_box2 .page_act').removeClass("on") // on 이라는 클래스를 지워라.
    $('.eb_slider_list').slick('slickPause');
  }
})

$(".event_box2 .page_act .btn_play").click(function (e) {
  e.preventDefault();
  if (!$('.event_box2 .page_act').hasClass('on')) {
    // '!'를 넣음으로써 on을 가지고 있지 않아야 true
    // ! --> not/부정을 의미, 맞으면 false/틀리면 true. 결과와 반대로 해석을 한다.
    $('.event_box2 .page_act').addClass('on') // on 추가
    $('.eb_slider_list').slick('slickPlay');
  }
})

// event_box3 card slick

let card = $('.card')
card.slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  fade: true,
});
$('.event_box3 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  // .hasClass('on') ==> 클래스명 on을 가지고 있으면 true/ 없다면 false
  if ($('.event_box3 .page_act').hasClass('on')) {
    $('.event_box3 .page_act').removeClass('on');
    $('.card').slick('slickPause');
  }
})
$('.event_box3 .page_act .btn_play').click(function (e) {
  // 내장함수 ==> 함수를 javascript나 jQurey가 가지고 있어서,
  // 우리는 함수를 직접 만드는것이 아닌 이미 있는 함수를 가져다 쓴다.
  e.preventDefault();
  if (!$('.event_box3 .page_act').hasClass('on')) {
    $('.event_box3 .page_act').addClass('on')
    $('.card').slick('slickPlay');
  }
})

//life_버튼

let tab = $('.life_menu ul li');
let style = $('.life_style ul li')

tab.mouseover(function () {   // '마우스를 tab 한다면 ~ 할것이다.'
  let target=$(this);
  let index=target.index()    // 사용자가 마우스를 올린 버튼의 index 번호를 추출한다.
  // console.log(index) 해당 버튼을 누르면 해당 번호가 console에 찍히는것을 확인한다.

  style.css({opacity:0})    // 1) 모두 안보이게 한다.
  style.eq(index).css({opacity:1})    // 2) 사용자가 마우스를 올린 버튼의 index 번호에 해당하는 '.life_style ul li' 요소만을 보이게 한다.
})

