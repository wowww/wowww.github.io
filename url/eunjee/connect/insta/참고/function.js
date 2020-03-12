/*//첫번째 코드 구현
$(document).ready(function(){
   
   var nowIdx = 0;//클릭한 인디케이터의 인덱스값을 저장할 변수
   
   //1단계) 페이지네이션에 대한 클릭 이벤트 구문
   $(".sliles-pagination>li").click(function(){
      
      //1) 이번에 클릭한 li요소의 인덱스번호 추출
      nowIdx = $(this).index(); //클릭한 인디케이터의 인덱스값을 저장할 변수
      
      $("#slides>.slides-container").css({
         
         //nowIdx = 값을 구하는 식;
         
         
         //2) 슬라이드 컨테이너의 left 좌표를 설정

         "left" : -478*nowIdx//(인덱스 번호)
        
         
         //"left":0     -478*0  //nowIdx = 0
         //"left":-478  -478*1  //nowIdx = 1
         //"left":-956  -478*2  //nowIdx = 2
         //"left":-1434 -478*3  //nowIdx = 3
         //"left":-1912 -478*4  //nowIdx = 4
         //"left":-2390 -478*5  //nowIdx = 5
         
      });
      //3) 인디케이터 활성화 표시 .on
      $(".sliles-pagination>li").removeClass("on"); //on제거
      $(this).addClass("on"); //on활성화
      
      

   })
   //   이전버튼에 대한 알고리즘
      
   //   1. 이전 슬라이드에 매칭되는 nowIdx 추출
   //   2. 슬라이드 컨테이너 이동
   //   3. 인디케이터 활성화 표시
      
   $(".slides-prev").click(function(evt){
      evt.preventDefault();
      if(nowIdx>=1){
         nowIdx = nowIdx -1; //1
      }
      $(".slides-container").animate({
         "left":-478*nowIdx
      });
   
      $(".sliles-pagination>li").removeClass("on")
                          .eq(nowIdx).addClass("on");
         
   });
   
   //3단계-다음버튼에 대한 클릭이벤트 구문
   $(".slides-next").click(function(evt){
      evt.preventDefault();
      
      if(nowIdx<=4){
         nowIdx = nowIdx+1
      };
      
      $(".slides-container").animate({
         "left":-478*nowIdx
      });
   
      $(".sliles-pagination>li").removeClass("on")
                          .eq(nowIdx).addClass("on");
   });
});
*/



//두번째 코드구현
$(function(){
   var nowIdx = 0 //클릭한 인디케이터의 인덱스값을 저장할 변수 
   //0을 넣는 의미1)숫자값을 저장할 것이다. 6개의 인디케이터 중에서 맨 처음 0번꺼를 보여주겠다. 
   var $indicator = $(".sliles-pagination>li>a");
//1단계) 페이지네이션의 a에 대한 클릭 이벤트 구문
   $indicator.click(function(evt){
      evt.preventDefault;
   //1) 이번에 클릭한 a요소의 인덱스번호 추출
      nowIdx = $indicator.index(this); //만능방법
      //console.log("nowIdx = ",nowIdx); 확인하는 용도
   
   //2) 슬라이드 컨테이너의 left 좌표를 설정
      $("#slides>.slides-container").animate({
         "left":-478*nowIdx
      });
   //3) 인디케이터 활성화 표시 .on
      
      //(1)모든 li에서 .on제거
      $(".sliles-pagination>li").removeClass("on");
      
      //(2)해당 li에 .on 추가
      //$(this).parent().addClass("on");//해당 li에 .on 추가
      
      //(1)번 (2)번 합친 코드
      $indicator.eq(nowIdx).parent().addClass("on").sibling().removeClass("on");
      
   });
   
   //   이전버튼에 대한 알고리즘
      
   //   1. 이전 슬라이드에 매칭되는 nowIdx 추출
   //   2. 슬라이드 컨테이너 이동
   //   3. 인디케이터 활성화 표시
   
   
//2단계) 이전 버튼에 대한 클릭이벤트 구문
   $(".slides-prev").click(function(evt){
      evt.preventDefault();
      
      //1
	  if(nowIdx>=1){
      nowIdx = nowIdx -1;      //축약 nowIdx -=1; //nowIdx--;
      }else{
		  nowIdx = 5;
	  }
	  
	  
	  
      //2
      $(".slides-container").animate({
         "left":-478*nowIdx
      });
      
      
      //3
      //$indicator.parnet().removeClass("on");
      //$indicator.eq(nowIdx).parent().addClass("on");
      $indicator.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");
      
   });


//3단계) 다음 버튼에 대한 클릭이벤트 구문
   $(".slides-next").click(function(evt){
      evt.preventDefault();
      if(nowIdx<=4){
		nowIdx = nowIdx +1;     
      }else{
		  nowIdx = 0;
	  }
	  $(".slides-container").animate({
         "left":-478*nowIdx
      });
      $indicator.eq(nowIdx).parent().addClass("on")
                .siblings().removeClass("on");
   });



});
