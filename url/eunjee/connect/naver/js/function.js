$(function(){
    $(window).on("load resize", function(){
       
        /*$("#slides").height($(this).height());*/
        $("#slides").width($(this).width());
        
        //페이지네이션 설정(위치 고정)
        var $page  = $(".page-wrap");
        var $pagenation  = $(".slides-pagination");
        
        //라이트박스 고정
        var $boxWrap  = $(".box_wrap");   
        var nowWidth = $(window).width();
        
        if(nowWidth<1240){
            
            $page.css({
                "width":200,
                "left":60,
                "margin-left":60
            });
        }else{
           
            $page.css({
                "width":1240,
                "left":50+"%",
                "margin-left":0
            });
        }
    });
    
    //header의 sub메뉴 숨김
    $("#guid .gnb>li>.sub").css({
        "display":"none"
    });

});


//header
$(function(){
    
    $(".gnb>li>a").on("click",function(evt){
        evt.preventDefault();
         
        $("header>h1").stop().slideDown(100);
        $("#guid .gnb>li>.sub").stop().show();
    
        
    /**********************************************/
    //gnb 활성화
  
    var nowIdx = 0;
    
    $("#guid .gnb>li>a").mouseenter(function(){
        
        nowIdx = $("#guid .gnb>li").index(this);
        
        $(this).parent().addClass("on").siblings("li").removeClass("on");
        
        
    });
    
    $("#guid .gnb>li").mouseleave(function(){
        $("#guid .gnb>li").removeClass("on");
        
    });
        
    $("#guid .gnb>li").mouseenter(function(){
        
        
        nowIdx = $("#guid .gnb>li>a").parent().index(this);
        $(this).addClass("on").siblings("li").removeClass("on");
    });
        
    /**********************************************/
        
        
    });
    
    $("#guid .gnb").on("mouseleave",function(evt){
        evt.preventDefault();
        
        $("header>h1").stop().slideUp();
        $("#guid .gnb>li>.sub").stop().slideUp();
    });
    

    
    //.crumb_mnu 왼쪽 상단메뉴
    $(".crumb_mnu").hide();
    
    $(".cube").on("click mouseover",function(){
        $(".crumb_mnu").css({
            "display":"block"
        });
    });
    
    $(".crumbs,.crumb_mnu").on("mouseleave",function(){
        $(".crumb_mnu").css({
            "display":"none"
        });
    });
});
    



//슬라이드
$(function(){
    var $indicator = $(".slides-pagination>li>a");
    var nowIdx = 0;
    var intervalID = null;
    
    $(".slides-container>li").eq(1).hide();
    $indicator.click(function(evt){
        evt.preventDefault();
        
        nowIdx = $indicator.index(this);
        
        console.log("nowIdx=",nowIdx);
        
        
        $(this).parent().addClass("on").siblings().removeClass("on");
        
        $(".slides-container>li").eq(1).fadeOut();
        
        if(nowIdx==0){
            $(".slides-container>li").eq(0).stop().fadeIn();
        }else{
            $(".slides-container>li").eq(1).stop().fadeIn();
        }
        
        clearInterval(intervalID);
    });
    

    
    
    $(window).load(function(){
        
        intervalID = setInterval(function(){
           $(".slides-container>li").eq(nowIdx).stop().fadeOut();
            
            if(nowIdx==0){
                nowIdx = 1;
            }else{
                nowIdx = 0;
            }
            
            $(".slides-container>li").eq(nowIdx).stop().fadeIn();
            
        },10000);
        
        
    });
    
    //이전 다음
    var i = 0 ;
    var $page = $(".slides-pagination>li");
    
     $(".slides-prev").on("click", function(evt){
         evt.preventDefault();
        i--;//음수일 때
         if(i<0){
             i=1
         };
        $(".slides-container>li").eq(i).fadeIn().siblings().fadeOut();
        
        $page.eq(i).addClass("on").siblings().removeClass("on");

        
        
    });
    
    $(".slides-next").on("click",function(evt){
        evt.preventDefault();
        i++;
        console.log(i)
        if(i>1){
            i=0
        };
        $(".slides-container>li").eq(i).fadeIn().siblings().fadeOut();
        $page.eq(i).addClass("on").siblings().removeClass("on");
    })
    
    
});

//동영상
$(function(){
    var $move = $(".boxpart>a:nth-child(3)>span");
    var $lightbox = $(".lightbox");
    
    $move.on("click",function(){
        
        
        $(".shadow, .lightbox").fadeIn();
        
    });
    
    $(".clse,.shadow").on("click",function(){
        $(".shadow, .lightbox").fadeOut();
    });
    
    
    
});

// 동영상 자동재생,정지 이벤트 만들기
$(function(){
    
    var $mov = document.getElementById("movie");
    
    $mov.pause();
    
    $(".view").on("click",function(evt){
        evt.preventDefault();
        
        $mov.load();
        $mov.play();
        
    });
    
    //닫기버튼, 쉐도우 눌렀을 때 정지
    $(".clse,.shadow").on("click",function(){
        $mov.load();
        $mov.pause();
        
    });
    
});


//오른쪽 하단 ↑아이콘 클릭시, top으로 설정
$(function(){
    var $top = $(".top_btn");
    
    $top.click(function(evt){
        evt.preventDefault();
        
        $("html,body").stop().animate({
            "scrollTop":0
        },400,"easeInQuint");
        
    });
});




/******************1025할일*******************/

//스크롤 높이 값에 따른 header
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        
        console.log(scrollTop);
        
        if(scrollTop>1){
           
           $("header").addClass("on");
             $(".cont_3").css({
                "height":300,
                "overflow":"hidden"
            });
           
        }else{
           $("header").removeClass("on");
        }
        
    });

});



//스크롤탑값이 1430일 때, cont_3보이게 하기
$(function(){
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        
        if(scrollTop>1470){
            $(".cont_03").stop().animate({
                "height":965
                
            },600,function(){
                $(".cont_03>div>p").stop().animate({
                    "opacity":1
                },50,function(){
                    
                    $(".text_cont>li:nth-child(1),.text_cont>li:nth-child(2)").delay(500).stop().animate({
                    "left":0,
                    "opacity": 1
                    
                    },600);
                    $(".text_cont>li:nth-child(3),.text_cont>li:nth-child(4)").delay(500).stop().animate({
                        "right":0,
                        "opacity": 1

                    },600,function(){
                         $(".cont_03>div>.area_line>li").stop().animate({
                        "opacity":1
                    },50);
                    });
               
                });

            });
        }
        
    });
    
});

























