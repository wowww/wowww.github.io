$(function(){
    $(window).on("load resize", function(){
        /*$("#slides").height($(this).height());*/
        $("#slides").width($(this).width());
        
        
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



//스크롤 높이 값에 따른 header
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        
        //console.log(scrollTop);
        
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


/*
//슬라이드 페이지네이션
//슬라이드 이전 다음버튼
$(function(){
    

    var $slides = $(".slides-container");
    var $indicator = $(".slides-pagination>li>a");
    var nowIdx = 0;
    
    var arrSlide = [];
    $slides.children("li").each(function(idx){
        arrSlide[idx]=1120*idx;
    });
    console.log(arrSlide);
    
    
    
    $(".slides-prev").on("click",function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        
        console.log(nowIdx);
        if(nowIdx>=1){
           nowIdx --;
        }else{
            nowIdx = 17;
            
        };
        
        $slides.stop().animate({
            "left":-1120*nowIdx
            
        });
        
       //인디케이터, 밑에 설명 활성화
        $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
        $(".slides-explan>li>p").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
        
    });
     
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        nowIdx = $indicator.index(this);
        sixIdx = nowIdx*6;
        
        $slides.stop().animate({
            "left":-(arrSlide[sixIdx])
        });
        var idx = Number($slides.css("left"))/-1120;
        console.log(idx)
        $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  
        
       //인디케이터, 밑에 설명 활성화
        
       // $(".slides-explan>li>p").eq(nowIdx).parent().addClass("on").siblings().removeClass("on");  
        

    });
    
   
});
*/
/*
//인디케이터,이전,다음 버튼
$(function(){
    var $slides = $(".slides-container");
    var $indicator = $(".slides-pagination>li>a");
    
    var nowIdx = 0;
    var sixIdx = nowIdx*6
    
    var arrSlide = [];
    
    $indicator.click(function(){
        
        nowIdx = $indicator.index(this);
        
        $slides.children("li").each(function(idx){
        arrSlide[idx]=1120*idx;
        });
        console.log(arrSlide);
        
        $slides.stop().
        
        
    });
    
});

*/


//lectureroom
$(function(){
    var idx = 0;
    var $indicator = $(".lectureroom>.slides-pagination>li>a");
    var $slide = $(".lectureroom .slides-container");
    var $explan = $(".lectureroom .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        idx = $indicator.index(this)*6;
        $slide.stop().animate({"left":-(1120*idx)});
       
        $indicator.eq(idx/6).parent().addClass("on").siblings().removeClass("on");
        $explan.eq(idx/6).parent().addClass("on").siblings().removeClass("on");
        
    });
            
    $(".lectureroom .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=17
        }
        
        $(".lectureroom .slides-container").stop().animate({"left":-(1120*idx)});
        
        if(idx<6){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>5 && idx<12){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
        
    });
    
    
    $(".lectureroom .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<17){
            idx++;
        }else{
            idx=0
        }
        
        $(".lectureroom .slides-container").stop().animate({"left":-(1120*idx)});
        
        if(idx<6){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>5 && idx<12){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
    });
      
});

//studio
$(function(){
    var idx = 0;
    var $indicator = $(".studio>.slides-pagination>li>a");
    var $slide = $(".studio .slides-container");
    var $explan = $(".studio .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        idx = $indicator.index(this)*3;
        $slide.stop().animate({"left":-(1120*idx)});
       
        $indicator.eq(idx/3).parent().addClass("on").siblings().removeClass("on");
        $explan.eq(idx/3).parent().addClass("on").siblings().removeClass("on");
        
    });
            
    $(".studio .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=17
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<3){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>2 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<9){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>8 && idx<12){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11 && idx<15){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>14){
            $indicator.eq(5).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(5).parent().addClass("on").siblings().removeClass("on");
            
        }
        
    });
    
        
    $(".studio .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<17){
            idx++;
        }else{
            idx=0
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<3){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>2 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<9){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>8 && idx<12){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11 && idx<15){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>14){
            $indicator.eq(5).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(5).parent().addClass("on").siblings().removeClass("on");
            
        }
        
    });
});

//lounge
$(function(){
    var idx = 0;
    var $indicator = $(".lounge>.slides-pagination>li>a");
    var $slide = $(".lounge .slides-container");
    var $explan = $(".lounge .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        idx = $indicator.index(this)*6;
        $slide.stop().animate({"left":-(1120*idx)});
       
        $indicator.eq(idx/6).parent().addClass("on").siblings().removeClass("on");
        $explan.eq(idx/6).parent().addClass("on").siblings().removeClass("on");
        
    });
            
    $(".lounge .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=17
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<6){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>5 && idx<12){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
        
    });
    
    
    $(".lounge .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<17){
            idx++;
        }else{
            idx=0
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<6){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>5 && idx<12){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>11){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
    });
      
});













