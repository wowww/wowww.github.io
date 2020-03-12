//로딩중- 마지막에 다 하고나서 활성화하기 CSS display = none;
$(function(){
   $(".loading>div").fadeIn(5000); 
    $(".loading").delay(2200).fadeOut(240,function(){
        $(this).remove();
    });
});//end of 로딩중

//리사이즈
$(function(){
    $(window).on("load resize",function(){
        $("#slides").width($(this).width());
    });
});
$(function(){
    var $mnu = $(".slides-pagination>ul>li>a");
    var $bar = $(".slides-pagination>.bar>ol");
    var $circle = $(".slides-pagination>.bar>ol>li");
    var aniChk = false; //페이지가 에니메이트 중인지 표현하는 변수
    var idx=0;
    var oldIdx = idx;
    var nowIdx = 0;
    var arrLftVal = [];
    
    //DOM Tree 구성 완료시점에 작동
    $("#slides>.bgi>li").each(function(idx){
        arrLftVal[idx]=$("#slides>.bgi>li").eq(idx).offset().left;
    });
    $(window).on("resize", function(){
        $("#slides>.bgi>li").each(function(idx){
            arrLftVal[idx]=$("#slides>.bgi>li").eq(idx).offset().left;
        });  
    });
    
    //문서를 원하는 left값으로 애니메이트
    var pageAni = function(lftVal){
        aniChk = true;
        
        $("html,body").stop().animate({
            "scrollLeft" : lftVal
        }, function(){
            aniChk = false;
        });
    };
    //화면 이동 함수
    var eunjeeRun = function(){
        $("html,body").stop().animate({
            "scrollLeft":arrLftVal[idx]
        },function(){aniChk=false;});

        $bar.stop().animate({
            "width":103*idx
        });
    };
    //메뉴에 대한 클릭이벤트 구문
    $mnu.on("click",function(evt){
        evt.preventDefault();
        oldIdx = idx;
        idx = $mnu.index(this);
         eunjeeRun();
        if(idx<oldIdx){
           $(".me").css({
            "transform":"rotateY(180deg)"  
            });
        }else{
           $(".me").css({
            "transform":"rotateY(0deg)"  
            });
        }
            console.log("idx = ", idx);
            console.log("$mnu.index(this) = ", $mnu.index(this));       
    });       
    //페이지 load된 시점에 작동
    $(window).load(function(){
        pageAni(arrLftVal[nowIdx]);
    });
    //--> 아래 코드 삭제해도 되는 코드
    //스크롤 left값에 따른 메뉴의 활성화 표시 
    $(window).scroll(function(){
        var scrollLeft = $(window).scrollLeft();
        var $all = $(window).width();
        //console.log(scrollLeft);
        for(var i=0;i<=4;i++){
           /* //로드될 때 깜빡거림ㅜㅜ...
            if(scrollLeft >= arrLftVal[i]){
                $circle.eq(i).addClass("on");
            }else if(scrollLeft < arrLftVal[i]){
                $circle.eq(i).removeClass("on");
            }*/
        }
    });
    $(window).on('mousewheel DOMMouseScroll', function(evt){
        evt.preventDefault();
        var wheelDelta = evt.originalEvent.wheelDelta;
        if(aniChk==false){
            //마우스 휠을 위쪽으로 스크롤	
            if(evt.originalEvent.wheelDelta>0 || evt.originalEvent.detail<0){	
                if(idx>0){idx--;}
                console.log("evt.originalEvent.wheelDelta = ",evt.originalEvent.wheelDelta);
                $(".me").css({
                   "transform":"rotateY(180deg)" 
                });
            }else{//마우스 휠을 아래쪽으로 스크롤		
                if(idx<4){idx++;}
                console.log("id = ",idx);
                $(".me").css({
                   "transform":"rotateY(0deg)" 
                });
            }
            aniChk=true;
            eunjeeRun();
        }
    });
});

//스페이스바를 누르면 --> 너무 게임같아서 삭제..
/*$(function(){
    var keyCode = null;
    $(window).on('mousewheel DOMMouseScroll', function(evt){
        evt.preventDefault();
        var wheelDelta = evt.originalEvent.wheelDelta;
        if(keyCode != 32){
            $(this).scrollLeft($(this).scrollLeft()-wheelDelta+50);
        }
    });
    $(window).on("keyup", function(evt){
        keyCode = evt.which;
        console.log("keyCode = ", keyCode);
        //캐릭터 점프 코드 
        if(evt.which == 32){
           $(".me").stop().animate({
               "bottom":240
           },100).delay(200).stop().animate({
               "bottom":180
           },100);
        }else{
            keyCode = null;
        }
        //완료시 keyCode = null;
    });
});*/

//은지 뛰는 아이콘
$(function(){
    var i = 0;
    setInterval(function(){
        if(i<10){
            i++;
        }else{
            i=1;
        }
        console.log("i = ", i);
        $(".me>img").attr({
			"src" : "images/ico/run_"+i+".gif"
        });
    },100);
});

//start - 심판
$(function(){
    var i = 0;
    setInterval(function(){
        if(i<5){
            i++;
        }else{
            i=1;
        }
        console.log("i = ", i);
        $(".referee>img").attr({
			"src" : "images/start/start"+i+".png"
        });
    },200);
    /*스타트클릭했을 때, 라이트박스 go 클릭부분*/
    $(".box1>.shadow>.lightbox>p>span:nth-child(3)>span").css({
        "width":0
    });
    $(".box1>.shadow>.lightbox>p>span:nth-child(3)>button").mouseover(function(){
        $(".box1>.shadow>.lightbox>p>span:nth-child(3)>span").animate({
            "width":40+"%"
        },600);
        $(".box1>.shadow").delay(1500).fadeOut(1000);
    });
    /*aboutme클릭했을 때 라이트박스의 배너 부분*/
});

//라이트박스 > 지정 다시해야함 this 
$(function(){
    var $box = $(".box1>.opn>a");
    var $lightbox = $(".box1 .lightbox");
    $box.on("click", function(evt){
        evt.preventDefault();
        $lightbox.fadeIn();
        $(".box1>.shadow").fadeIn();
    });
    $(".box1 .clse").click(function(){
        $lightbox.fadeOut();
        $(".box1>.shadow").fadeOut();
    });
    $(".box1>.shadow").click(function(){
        $(this).children().fadeOut();
        $(this).fadeOut();
    });
    $(".box1>.shadow").hide();
    $lightbox.click(function(evt){
        evt.stopPropagation();
        $(document).keyup(function(evt){
           if(evt.which == 27){
               $(".box1>.shadow").fadeOut();
           }
        });
    });
});
$(function(){
    var $box = $(".box2>.opn>a");
    var $lightbox = $(".box2 .lightbox");
    $box.on("click", function(evt){
        evt.preventDefault();
        $lightbox.fadeIn();
        $(".box2>.shadow").fadeIn();
    });
    $(".box2 .clse").click(function(){
        $lightbox.fadeOut();
        $(".box2>.shadow").fadeOut();
    });
    $(".box2>.shadow").click(function(){
        $(this).children().fadeOut();
        $(this).fadeOut();
    });
    $lightbox.click(function(evt){
        evt.stopPropagation();
        $(document).keyup(function(evt){
           if(evt.which == 27){
               $(".box2>.shadow").fadeOut();
           }
        });
    });
});
$(function(){
    var $box = $(".box3>.opn>a");
    var $lightbox = $(".box3 .lightbox");
    $box.on("click", function(evt){
        evt.preventDefault();
        $lightbox.fadeIn();
        $(".box3>.shadow").fadeIn();
    });
    $(".box3 .clse").click(function(){
        $lightbox.fadeOut();
        $(".box3>.shadow").fadeOut();
    });
    $(".box3>.shadow").click(function(){
        $(this).children().fadeOut();
        $(this).fadeOut();
    });
    $lightbox.click(function(evt){
        evt.stopPropagation();
        $(document).keyup(function(evt){
           if(evt.which == 27){
               $(".box3>.shadow").fadeOut();
           }
        });
    });
});
$(function(){
    var $box = $(".box4>.opn>a");
    var $lightbox = $(".box4 .lightbox");
    $box.on("click", function(evt){
        evt.preventDefault();
        $lightbox.fadeIn();
        $(".box4>.shadow").fadeIn();
    });
    $(".box4 .clse").click(function(){
        $lightbox.fadeOut();
        $(".box4>.shadow").fadeOut();
    });
    $(".box4>.shadow").click(function(){
        $(this).children().fadeOut();
        $(this).fadeOut();
    });
    $lightbox.click(function(evt){
        evt.stopPropagation();
        $(document).keyup(function(evt){
           if(evt.which == 27){
               $(".box4>.shadow").fadeOut();
           }
        });
    });
});
$(function(){
    var $box = $(".box5>.opn>a");
    var $lightbox = $(".box5 .lightbox");
    $box.on("click", function(evt){
        evt.preventDefault();
        $lightbox.fadeIn();
        $(".box5>.shadow").fadeIn();
    });
    $(".box5 .clse").click(function(){
        $lightbox.fadeOut();
        $(".box5>.shadow").fadeOut();
    });
    $(".box5>.shadow").click(function(){
        $(this).children().fadeOut();
        $(this).fadeOut();
    });
    $lightbox.click(function(evt){
        evt.stopPropagation();
        $(document).keyup(function(evt){
           if(evt.which == 27){
               $(".box5>.shadow").fadeOut();
           }
        });
    });
});

//aboutme textbpx Slide
$(function(){
    var nowIdx = 0;
    var $slides = $(".aboutme_container>ul");
    $(".about-perv").click(function(evt){
        evt.preventDefault();
        if(nowIdx>=1){
           nowIdx = nowIdx-1;
        }else{
           nowIdx = 3;
        }
        $slides.filter(".on").stop().fadeOut().removeClass("on");
        $slides.eq(nowIdx).stop().fadeIn().addClass("on");
    });
    $(".about-next").click(function(evt){
        evt.preventDefault();
        if(nowIdx<=2){
           nowIdx+=1;
        }else{
           nowIdx = 0;
        }
        $slides.filter(".on").stop().fadeOut().removeClass("on");
        $slides.eq(nowIdx).stop().fadeIn().addClass("on");
    });
});
//portfolio textbpx Slide
$(function(){
    var nowIdx = 0;
    var $slides = $(".portfolio_container>ul");
    $(".port-perv").click(function(evt){
        evt.preventDefault();
        if(nowIdx>=1){
           nowIdx = nowIdx-1;
        }else{
           nowIdx = 6;
        }
        $slides.filter(".on").stop().fadeOut(500).removeClass("on");
        $slides.eq(nowIdx).stop().fadeIn(600).addClass("on");
    });
    $(".port-next").click(function(evt){
        evt.preventDefault();
        if(nowIdx<=5){
           nowIdx+=1;
        }else{
           nowIdx = 0;
        }
        $slides.filter(".on").stop().fadeOut(500).removeClass("on");
        $slides.eq(nowIdx).stop().fadeIn(600).addClass("on");
    });
});