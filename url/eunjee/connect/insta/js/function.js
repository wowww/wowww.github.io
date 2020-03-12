$(function(){
   var nowIdx = 0 
   var $indicator = $(".slides-pagination>li>a");
   
   
   $indicator.click(function(evt){
      evt.preventDefault();
	  console.log("!");
   
       nowIdx = $indicator.index(this); 
 
      $("#slides>.slides-container").stop().animate({
         "left":-510*nowIdx
      });
      
      $(".slides-pagination>li").removeClass("on");
      $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
      
   });

   
   $(".slides-prev").click(function(evt){
      evt.preventDefault();
      
	  if(nowIdx>=1){
      nowIdx = nowIdx -1;     
      }else{
		  nowIdx = 3;
	  }
	  
	  
      $(".slides-container").stop().animate({
         "left":-510*nowIdx
      });

      $indicator.eq(nowIdx).parent().addClass("on")
              .siblings().removeClass("on");
      
   });


   $(".slides-next").click(function(evt){
      evt.preventDefault();
      if(nowIdx<3){
		nowIdx = nowIdx +1;     
      }else{
		  nowIdx = 0;
	  }
	  $(".slides-container").stop().animate({
         "left":-510*nowIdx
      });
      $indicator.eq(nowIdx).parent().addClass("on")
                .siblings().removeClass("on");
   });



});
