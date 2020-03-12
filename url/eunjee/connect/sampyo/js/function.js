$(function(){
	var $mainmnu = $(".gnb>li");
	var $sub = $(".gnb .sub");
   
	$mainmnu.mouseover(function(){
		$sub.hide();
		$(this).find(".sub").show();
	});
	$mainmnu.mouseout(function(){
		$sub.hide();
	});
	$sub.mouseover(function(){
		$mainmnu.show();
	});

});//약식 준비핸들러

//클릭했을 때 메뉴 호버처럼~~~~ 선택하기
$(function(){
	var $main = $("header>#top .gnb>li>a");
	var $submnu = $("header>#top .gnb .sub");
	 $main.click(function(evt){
		
		$(this).parent().addClass("on").siblings().removeClass("on");
	});
	$submnu.addClass("on");
	
});



$(function(){
	var nowIdx = 0; 
	var $indicator = $(".slides-pagination>li");

	$indicator.click(function(evt){
		evt.preventDefault();

		nowIdx = $indicator.index(this);
		$("#slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		});	

		$indicator.eq(nowIdx).parent().addClass("on")
							 .siblings().removeClass("on");  
								
	});						

	$(".slides-prev").click(function(evt){
		evt.preventDefault();
		
		if(nowIdx>=1){
			nowIdx = nowIdx -1;
		}else{
			nowIdx = 2;
		}
		
		$("#slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		}); 
		
		
		$indicator.parent().removeClass("on");
		$indicator.eq(nowIdx).parent().addClass("on");
		
		$indicator.eq(nowIdx).parent().addClass("on")
						.siblings().removeClass("on");
				
	});
    
	$(".slides-next").click(function(evt){
		evt.preventDefault();
		if(nowIdx<=1){
			nowIdx = nowIdx +1;
		}else{
			nowIdx = 0;
		}
		
		$("#slides>.slides-container").stop().animate({
			"left":-940*nowIdx
		}); 
		
		$indicator.eq(nowIdx).parent().addClass("on")
						.siblings().removeClass("on");

	});
		
	
});


$(function(){
	var nowIdx = 0;
    var intervalID = null;
    var $indicator = $(".slides-pagination>li");
	var $container = $("#slides>.slides-container");
	var $sideBanr = $("#slides>.slides-container>li");
	var $btnAuto = $(".main_benner>p>.btn-auto");
	 
	$(window).load(function(){
         
		$btnAuto.addClass("pause").text("일시정지");
		intervalID = setInterval(function(){
            
			if(nowIdx>=2){
               nowIdx = 0;
            }else{
               nowIdx++;
            }
            
            $indicator.eq(nowIdx).trigger("click");
            
         },3000);
		
		
		
	});

	$(".main_benner>p>.btn-auto").click(function(evt){
    
    
      evt.preventDefault();
      
      if($(this).hasClass("pause")){//자동재생 중이면
         $(this).removeClass("pause").text("자동재생");
         clearInterval(intervalID);
         
      }else{
         $(this).addClass("pause").text("일시정지");
         
         intervalID = setInterval(function(){
            
            if(nowIdx>=2){
               nowIdx = 0;
            }else{
               nowIdx++;
            }
            
            $indicator.eq(nowIdx).trigger("click");
            
         },4000);
         
      } 
   });

});
//.slides_story
$(function(){
	
	var $storyTit = $(".slides_story>ul>li>h2");
	var nowIdx = 0;
	var intervalID = null;
	
	$storyTit.click(function(){
		$(this).parent().stop().fadeOut(300);
		$(this).parent().siblings().stop().fadeIn(300);

		$(".btn_pause").addClass("on").siblings().removeClass("on");
		
		clearInterval(intervalID);
	});

	
	
	$(".btn_play").click(function(evt){
		evt.preventDefault();
		
		clearInterval(intervalID);	

		$(this).addClass("on").siblings().removeClass("on");
		
		intervalID = setInterval(function(){

			$storyTit.parents().eq(nowIdx).stop().fadeOut(300);	
			
			if(nowIdx==0){
				nowIdx = 1;
			}else{
				nowIdx = 0;
			}

			$storyTit.parents().eq(nowIdx).stop().fadeIn(300);
		},5000);
	});
	
	$(".btn_pause").click(function(evt){
		evt.preventDefault();

		$(this).addClass("on").siblings().removeClass("on");		
		clearInterval(intervalID);
	});	
	
	
	$(window).load(function(){
		$(".btn_play").addClass("on").siblings().removeClass("on")
	
		intervalID = setInterval(function(){

			console.log("1-nowIdx = ", nowIdx);
			
			$(".slides_story>ul>li").eq(nowIdx).stop().fadeOut();	
			
			if(nowIdx==0){
				nowIdx = 1;
			}else{
				nowIdx = 0;
			}
		
			$(".slides_story>ul>li").eq(nowIdx).stop().fadeIn();
		},5000);

	});
	
});

//그룹/계열사 찾아오시는 길
//삼표 1
$(function(){
	var $frst_arr = $(".sel_bx,.bottom>.map>.select_box>span.sb");

	$frst_arr.click(function(evt){
		evt.preventDefault();
	$(".bottom>.map>.select_box>.main_box").slideToggle(250);

	});
	$(".select_box").mouseleave(function(evt){
		evt.preventDefault();
		$(".main_box,.sub_box").hide();
	});
	
	/*텍스트 들어가라!!!!!!!!*/
	
	$(".main_box").find("a").click(function(evt){
		evt.preventDefault();
		var txt = $(this).text();
		$(this).parents(".main_box").hide();
		
		
		$(".bottom>.map>.select_box>.sel_bx>a").text(txt);
	});
	//선택하세요 텍스트 클릭하면 넣기
	$(".sub_box").find("a").click(function(evt){
		evt.preventDefault();
		var txt = $(this).text();
		$(this).parents("sub_box").hide();
		$(".bottom>.map>.select_box>.sub_slct>a").text(txt);
		
	});
	
	
});
//선택하세요 2
$(function(){
	var $scnd_arr = $(".sub_slct,span.btm_arr>a");
	
	$scnd_arr.click(function(evt){
		evt.preventDefault();
		$(".sub_box").slideToggle(250);
		
	});
	
});


//footer
//패밀리사이트
$(function(){
	var $family_site = $("footer>.footer_wrap>.icon_wrap>span.family_site");
	
	$family_site.click(function(evt){
		evt.preventDefault();
		$("footer>.footer_wrap>.site_sub_mnu").slideToggle(200);
		
		
	});
	$family_site.mouseleave(function(evt){
		evt.preventDefault();
        $("footer>.footer_wrap>.site_sub_mnu.on").hide();
    });
	
});


//메뉴전체보기
$(function(){
	var $footer_mnu = $("footer>.footer_wrap>.icon_wrap>span.all>a");
	
	$footer_mnu.click(function(evt){
		evt.preventDefault();
		$("article>.site_all_mnu").slideToggle(250);
		
	});
	

	
});