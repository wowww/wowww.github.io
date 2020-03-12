//슬라이드 메인배너 구현
$(function(){
      
   var $indicator = $(".line_mainbanr>.pagination>li>a");
   var nowIdx = 0;
   
   var move = function(){
      //인디케이터 활성화
      $indicator.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");
      
      //슬라이드 배너 이동
      $(".line_mainbanr>.container").stop().animate({
         "left" : (-100 * nowIdx) + "%"
      });      
   }

   
   $indicator.bind("click",function(evt){
      nowIdx = $indicator.index(this);
      
      move();
      
      evt.preventDefault();
   });
   
   
   //이전 버튼에 대한 클릭이벤트 구문
   $(".line_mainbanr>.prev").bind("click", function(evt){
       evt.preventDefault();
      //이전 슬라이드의 인덱스 번호 추출
      if(nowIdx<1){
         nowIdx = $indicator.length-1;//마지막 슬라이드의 인덱스 번호
      }else{
         nowIdx--;
      }
      
      move();
      
   });
   
   
   //다음 버튼에 대한 클릭이벤트 구문
   $(".line_mainbanr>.next").bind("click", function(evt){
       evt.preventDefault();
      //다음 슬라이드의 인덱스 번호 추출
      if(nowIdx>$indicator.size()-2){
         nowIdx = 0;
      }else{
         nowIdx++;
      }
      
      move();
   });
   
});


//언어선택 옵션박스
$(function(){
   
   var $langlist = $(".langlist");
   
   //언어클릭시 입력상자의 내용을 변경
   $langlist.find("a").bind("click",function(evt){
      
      $("#lang").val($(this).text());
      
      $(this).parent().addClass("on").siblings().removeClass("on");//활성색상 표시
      
      $langlist.toggle();
      
      evt.preventDefault();
   });
   
   
   $(".opt").bind("mouseenter",function(){
      $langlist.show();
      $(".opt .arrow").toggleClass("arrow-up");
   });
   
   
   $(".opt").bind("mouseleave",function(){
      $langlist.hide();
      $(".opt .arrow").toggleClass("arrow-up");
   });
      
});


//스크롤 기능의 원페이지
$(function(){
   
   var $topmnu = $(".gnb>li>a");//메인메뉴
   var arrArtiTop = [];//ariticle의 top값을 저장할 변수
   
   $("article").not(".line_mainbanr").each(function(){      
      arrArtiTop.push($(this).offset().top);
   });
   
   //console.log("arrArtiTop = ", arrArtiTop);
   
   $(window).bind("scroll", function(){
      
      var scrollTop = $(this).scrollTop();
      
      for(var i=0;i<$topmnu.size();i++){
         
         if(scrollTop>=arrArtiTop[i]-69){
            $topmnu.eq(i).parent().addClass("on")
                  .siblings().removeClass("on");
                  
         }else if(scrollTop<arrArtiTop[0]-69){
            $topmnu.parent().removeClass("on");
         }   
      }      
   });
   
   
   
   $topmnu.bind("click", function(evt){
      
      var nowIdx = $topmnu.index(this);
      
      $("html, body").stop().animate({
         "scrollTop" : arrArtiTop[nowIdx]-69
      },400,"easeInOutCubic");
      
      evt.preventDefault();
   });
   
   
   //로고 클릭 이벤트 구문
   $("h1>a").bind("click", function(evt){
      $("html, body").stop().animate({
         "scrollTop" : 0
      },400,"easeInOutCubic");   

      evt.preventDefault();
   });
   
   
   $(window).bind("load", function(){
      $("h1>a").trigger("click");
   });
   
   
   
});