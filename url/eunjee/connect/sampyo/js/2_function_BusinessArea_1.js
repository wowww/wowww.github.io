$(function(){
	var $mainmnu = $(".gnb>li");
	var $sub = $(".gnb .sub");
	
	//삼표소개 항상 고정
	$(".gnb>li:nth-child(2)").addClass("on");
	
   
	$mainmnu.mouseover(function(){
		$sub.hide();
		$(this).find(".sub").show();
	});
	$mainmnu.mouseout(function(){
		$sub.hide();
		$mainmnu.removeClass("on");
		$(".gnb>li:nth-child(2)").addClass("on");
	});
	$sub.mouseover(function(){
		$mainmnu.show();
		$(".gnb>li:nth-child(2)").removeClass("on");
	});

});//약식 준비핸들러

//클릭했을 때 메뉴 호버처럼~~~~ 선택하기
$(function(){
	var $main = $("header>#top .gnb>li>a");
	var $submnu = $("header>#top .gnb .sub");
	$main.click(function(evt){
		$(this).parent().addClass("on").siblings().removeClass("on");
		$submnu.addClass("on");
	});
	
	$main.mouseover(function(evt){
		evt.preventDefault();
		$(this).parent().addClass("on").siblings().removeClass("on");
		
		$submnu.addClass("on");
	});
});

/*section*/
$(function(){
	$(window).scroll(function(){
		var scrollTop = $("html,body").scrollTop();

		if(scrollTop>=120){
			$("section>.contain>.fixed").addClass("on");
            $(".icon>p>a").show();
			$(".contents").css({"margin-top":156});	
		}else{
			$("section>.contain>.fixed").removeClass("on");
            $(".icon>p>a").hide();
			$(".contents").css({"margin-top":0});
		}
	});
});


/*icon>p.icon_top>a누르기*/
$(function(){
	$(".icon>p.icon_top>a").click(function(evt){
		evt.preventDefault();
		$("html,body").stop().animate({
            "scrollTop":0
        },600,"easeInQuint");
	});
});

/*삼표소개*/

$(function(){
	var $intro = $(".select_box>input,select_box>.arr");
	var $list = $(".contain>.fixed>.list");
	var $intro_input = $(".select_box>input,.contain>.fixed>.list");
	$intro.mouseover(function(){
		$list.hide();
		$(this).parent().next(".list").stop().slideDown();
	});
	$(".select_box>input,.contain>.fixed>.list").mouseleave(function(){
		$list.hide();
	});
	$intro_input.mouseover(function(){
		$list.show();
	});
});
	
//클릭했을 때 메뉴 선택하기
$(function(){
	var $btn_1 = $(".select_box>label,.select_box>button.btn");
	
	$(".list>ul>li>a").click(function(evt){
		evt.preventDefault();
		var txt = $(this).text();
		
		$(this).parents(".list").hide();
		$(".select_box>input").val(txt);
	});
	
});

$(function(){
	var $btn_2 = $(".select_box_2>label,.select_box_2>button.btn");
	
	$(".list_2>ul>li>a").click(function(evt){
		evt.preventDefault();
		var txt = $(this).text();
		
		$(this).parents(".list_2").hide();
		$(".select_box_2>input").val(txt);
	});
	
});

/*개요*/
$(function(){
	var $intro = $(".select_box_2>input,select_box_2>.arr");
	var $list = $(".contain>.fixed>.list_2");
	var $intro_input = $(".select_box_2>input,.contain>.fixed>.list_2");
	$intro.mouseover(function(){
		$list.hide();
		$(this).parent().next(".list_2").stop().slideDown();
	});
	$(".select_box_2>input,.contain>.fixed>.list_2").mouseleave(function(){
		$list.hide();
		
	});
	
	$intro_input.mouseover(function(){
		$list.show();
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

	$family_site.mouseout(function(){
        $("footer>.footer_wrap>.site_sub_mnu.on").slideDown(200);
    });
	
});

//메뉴전체보기
$(function(){
	var $footer_mnu = $("footer>.footer_wrap>.icon_wrap>span.all>a");
	
	$footer_mnu.click(function(evt){
		evt.preventDefault();
		$("article").slideToggle(250);
	});
});

$(function(){
	
//페이지 load된 시점에 작동(2에서 F5하면 다시 0으로 갔으면 좋겠을 때)
$(window).load(function(){
        $("html,body").stop().animate({"scrollTop":0});
    });

});

//scroll top class추가 후, 적용
$(function(){
	var $top = $(".footer_wrap>.icon_wrap>.scroll>a");
	
	$top.click(function(evt){
		evt.preventDefault();
		$("html,body").stop().animate({
            "scrollTop":0
        },600,"easeInQuint");
		
	});
	
});
