$(function(){
	
    
	var $mnu = $(".gnb>li>a"); //메인메뉴
	var nowIdx = 0;
    
    var aniChk = false; 
	
    $(window).on("load resize",function(){
        $("article").width($(this).width());
        $("article").height($(this).height());
    });
	

	var arrTopVal = []
	
	arrTopVal[0] = $(".cont_0").offset().top;
	arrTopVal[1] = $(".cont_1").offset().top;
	arrTopVal[2] = $(".cont_2").offset().top;
	arrTopVal[3] = $(".cont_3").offset().top;
	arrTopVal[4] = $(".cont_4").offset().top;
	

	//문서를 원하는 높이로 애니메이트 시키는 함수
	var pageAni = function(topVal){
        
        aniChk=true;
        
		$("html,body").stop().animate({
			"scrollTop" : topVal
		},function(){                  //10.18 추가
            aniChk = false;
        });
	};

	//전체메뉴에 대한 클릭이벤트 구문
	$mnu.click(function(evt){
		evt.preventDefault;
		nowIdx = $mnu.index(this);
		pageAni(arrTopVal[nowIdx]);
	});
	
	
	
	
	//새로고침하면 맨 위로 가게 하고싶다. 페이지 load된 시점에 작동
	$(window).load(function(){
		pageAni(arrTopVal[nowIdx]);
        
	});
    $(".top-btn").click(function(){
        pageAni(arrTopVal[0]);
    });
    
	
	
	//스크롤 높이값에 따른 메뉴의 활성화 표시!! 1~2에 걸쳐있으면 1로 스크롤 움직일때 높이값 측정해서 작업하려고~!!
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		
		for(var i=0;i<=4;i++){
			
			if(scrollTop >= arrTopVal[i]){
                $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
			}
		}
	});
	
	
    
    //var aniChk = false; //페이지가 animate 중인지 표현하는 변수(true : 애니메이트 중)
    //마우스 휠 스크롤
    
    $(window).on("load resize",function(){
        
        $("article").width($(this).width());
        $("article").height($(this).height());
        
        arrTopVal[0] = $(".cont_0").offset().top;
        arrTopVal[1] = $(".cont_1").offset().top;
        arrTopVal[2] = $(".cont_2").offset().top;
        arrTopVal[3] = $(".cont_3").offset().top;
        arrTopVal[4] = $(".cont_4").offset().top;

	
        
    });
    
    
    
    
    $(window).on("mousewheel DoMMouseScroll", function(evt){
        
        
        
        if(aniChk==false){
            //console.log("마우스 휠 이벤트 발생")
            evt.originalEvent.wheelDelta;//크롬 Up:120(양수) Down:-120(음수)
            evt.originalEvent.detail;//파이어폭스 Up:-3(음수) Down:3(양수)

            if(evt.originalEvent.wheelDelta>0||evt.originalEvent.detail<0){//마우스 휠을 위쪽으로 스크롤
                //console.log("위로");
                if(nowIdx>0){nowIdx--;}
            }else{//마우스 휠을 아래쪽으로 스크롤
                //console.log("아래로");  
                if(nowIdx<4){nowIdx++;}            
            }

            pageAni(arrTopVal[nowIdx]);   
        }
    
        
    });
    
});


//오른쪽 하단 top아이콘 클릭시
$(function(){
    var $top = $(".topbtn");
    
    $top.click(function(evt){
        evt.preventDefault();
        
        $("html,body").stop().animate({
            "scrollTop":0
        },400,"easeInQuint");
        
    });
});

//페이드 배너
$(function(){
    var nowIdx = 0;
    
    setInterval(function(){
        
    $(".cont_0>.slides-container>.slides>li").eq(nowIdx).fadeOut(500);
        
    if(nowIdx==2){
        nowIdx=0;
    }else{
        nowIdx++;
        
    }
        
    $(".cont_0>.slides-container>.slides>li").eq(nowIdx).fadeIn(500);    
        
        
    },5000);
    
    
});

$(function(){
    var nowIdx = 0;
    
    setInterval(function(){
        
    $(".cont_1>.slides-container>.slides>li").eq(nowIdx).fadeOut(500);
        
    if(nowIdx==1){
        nowIdx=0;
    }else{
        nowIdx++;
        
    }
        
    $(".cont_1>.slides-container>.slides>li").eq(nowIdx).fadeIn(500);    
        
        
    },5000);
    
    
});
$(function(){
    var nowIdx=0;
    setInterval(function(){
        
        $(".cont_3>.slides-container>.slides>li").eq(nowIdx).fadeOut(500);
        if(nowIdx==1){
            nowIdx=0;
        }else{
            nowIdx++;
        }
        $(".cont_3>.slides-container>.slides>li").eq(nowIdx).fadeIn(500);
        
        
    },5000);
    
    
});



$(function(){
    
    $(window).on("load", function(){
		new WOW().init();//WOW 플러그인 연동
	});
    
});

//오른쪽 상단 메뉴 클릭, 마우스이벤트
$(function(){
    
    //알아보기
    $(".pleasure>a").on("mouseover",function(){
        $(".pleasure>a>span").css({
            "content":"알아보기"
        });
    });
    
    //클릭
    $(".right-mnu>a").on("click",function(evt){
        
        evt.preventDefault();
        
        $(".shadow").stop().fadeIn();
        
        $(".box_right").css({
            "display":"block"
        });
        $(".mnu_box").animate({
            "right":0+"%"
        });
        
        $(".common").css({
            "display":"none"
        });
        
        
    });
    
    
    //닫기
    $(".mnu_box>.clse,.shadow").on("click",function(evt){
        evt.preventDefault();
        
        $(".mnu_box").animate({
            "right":-100+"%"
        });
        
        $(".shadow").stop().fadeOut();
        
        $(".common").css({
            "display":"block"
        });
        
        $(".family-site-list,.language-list").css({
            "display":"none"
        });
        
    });
    
    $(".box_right").css({
            "display":"none"
    });
    
    
    //안의 패밀리사이트, 언어
    $(".family-site,.language").on("click",function(){
        
        $(".family-site-list,.language-list").stop().slideToggle();
        
        
        
    });
    
    
});


//왼쪽 상단 메뉴 클릭, 마우스이벤트
$(function(){

    $(".left-mnu>a").on("click",function(evt){
        
        evt.preventDefault();
        
        $(".shadow_2").stop().fadeIn();
        
        $(".box_left").css({
            "display":"block"
        });
        $("#boxmnu").animate({
            "left":0+"%"
        });
        
        $(".common").css({
            "display":"none"
        });
        
    });
    
    
    //닫기
    $("#boxmnu>.clse,.shadow_2").on("click",function(evt){
        evt.preventDefault();
        
        $("#boxmnu").animate({
            "left":-100+"%"
        });
        
        $(".shadow_2").stop().fadeOut();
        
        $(".common").css({
            "display":"block"
        });
        
        
    });
    
    $(".box_left").css({
            "display":"none"
    });
    
    
  
    
    //스크롤 안의 박스들 호버했을 때 그림자
    $(".scroll>ul>li").on("mouseover",function(){
        $(this).css({ 
             "box-shadow" : "0 0 25px rgba(0,0,0,0.5)", 
             "transition" : "all 1s" 
        });
        
        $(this).find("img").css({ 
             "opacity" : 0.5, 
             "transition" : "all 1s" 
          });

        $(this).find(".txt").stop().animate({ 
             "top":50+"%"
        },function(){ 
             $(this).find("p").addClass("on"); 
        });

        
    });
    
    //마우스 아웃
    $(".scroll>ul>li").on("mouseout",function(){
        $(this).css({ 
             "box-shadow" : "none", 
             "transition" : "all 1s" 
        });
        
        $(this).find("img").css({ 
             opacity : 1, 
             "transition" : "all 1s" 
          });

        $(this).find(".txt").stop().animate({ 
             top:"60%" 
        },function(){ 
             $(this).find("p").addClass("on"); 
        });

        
    });
    
});


