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



//1f
$(function(){
    var idx = 0;
    var $indicator = $(".ground>.slides-pagination>li>a");
    var $slide = $(".ground .slides-container");
    var $explan = $(".ground .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        if($indicator.index(this)==3){
           idx = $indicator.index(this)*2;
            $slide.stop().animate({"left":-(1120*idx)});
       
            $indicator.eq(idx/2).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx/2).parent().addClass("on").siblings().removeClass("on");
        }else{
           idx = $indicator.index(this)*3;
            $slide.stop().animate({"left":-(1120*idx)});
       
            $indicator.eq(idx/3).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx/3).parent().addClass("on").siblings().removeClass("on");
        }
        
        
        
    });
            
    $(".ground .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=13
        }
        
        $(".ground .slides-container").stop().animate({"left":-(1120*idx)});
        
        if(idx<3){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>2 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<9){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        else if(idx>8 && idx<11){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");  
        }else if(idx>10){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
        }
        
        
        
    });
    
    
    $(".ground .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<13){
            idx++;
        }else{
            idx=0
        }
        
        $(".ground .slides-container").stop().animate({"left":-(1120*idx)});
        
        if(idx<3){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>2 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<9){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        else if(idx>8 && idx<11){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");  
        }else if(idx>10){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
        }
        
        
    });
      
});


//2f
$(function(){
    var idx = 0;
    var $indicator = $(".campus>.slides-pagination>li>a");
    var $slide = $(".campus .slides-container");
    var $explan = $(".campus .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
            idx = $indicator.index(this)*2;
            $slide.stop().animate({"left":-(1120*idx)});
       
            $indicator.eq(idx/2).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx/2).parent().addClass("on").siblings().removeClass("on");
            
        
    });
            
    $(".campus .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=9
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<2){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>1 && idx<4){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>3 && idx<6){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<8){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>7){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
            
        }
        
    });
    
        
    $(".campus .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<9){
            idx++;
        }else{
            idx=0
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<2){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>1 && idx<4){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>3 && idx<6){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5 && idx<8){
            $indicator.eq(3).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(3).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>7){
            $indicator.eq(4).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(4).parent().addClass("on").siblings().removeClass("on");
            
        }
        
        
    });
      
});


//3f
$(function(){
    var idx = 0;
    var $indicator = $(".studio>.slides-pagination>li>a");
    var $slide = $(".studio .slides-container");
    var $explan = $(".studio .slides-explan>li>p");
    
    
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        idx = $indicator.index(this);
            $slide.stop().animate({"left":-(1120*idx)});
       
            $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx).parent().addClass("on").siblings().removeClass("on");
  
        
    });
            
    $(".studio .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=7
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");  
        $explan.eq(idx).parent().addClass("on").siblings().removeClass("on");  
    });
    
    
    $(".studio .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<7){
            idx++;
        }else{
            idx=0
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");  
        $explan.eq(idx).parent().addClass("on").siblings().removeClass("on");  
    });
      
});


//4ff
$(function(){
    var idx = 0;
    var $indicator = $(".atelier>.slides-pagination>li>a");
    var $slide = $(".atelier .slides-container");
    var $explan = $(".atelier .slides-explan>li>p");
    
    $indicator.on("click",function(evt){
        evt.preventDefault();
        
        if($indicator.eq(0)){
           idx = $indicator.index(this)*5;
            $slide.stop().animate({"left":-(1120*idx)});
            $indicator.eq(idx/5).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx/5).parent().addClass("on").siblings().removeClass("on");
        }else if($indicator.eq(1)){
            
           idx = $indicator.index(this)*1;
            $slide.stop().animate({"left":-(1120*5)});
       
            $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx).parent().addClass("on").siblings().removeClass("on");
        }else if($indicator.eq(2)){
           idx = $indicator.index(this)*1;
            $slide.stop().animate({"left":-(1120*idx/2)});
       
            $indicator.eq(idx/2).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(idx/2).parent().addClass("on").siblings().removeClass("on");      
        }
        
    });
            
    $(".atelier .slides-prev").on("click",function(evt){
         evt.preventDefault();
        if(idx>0){
            idx--;
        }else{
            idx=6
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<5){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>4 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
        
    });
    
    
    $(".atelier .slides-next").on("click",function(evt){
         evt.preventDefault();
        if(idx<6){
            idx++;
        }else{
            idx=0
        }
        
        $slide.stop().animate({"left":-(1120*idx)});
        
        if(idx<5){
            $indicator.eq(0).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(0).parent().addClass("on").siblings().removeClass("on");
        
        }else if(idx>4 && idx<6){
            
            $indicator.eq(1).parent().addClass("on").siblings().removeClass("on");
            $explan.eq(1).parent().addClass("on").siblings().removeClass("on");
            
        }else if(idx>5){
            $indicator.eq(2).parent().addClass("on").siblings().removeClass("on");  
            $explan.eq(2).parent().addClass("on").siblings().removeClass("on");  
        }
        
        
    });
      
});


/*guide*/
$(function(){
    var $btn1 = $("#guide>a.btn_01");
    var $btn2 = $("#guide>a.btn_02");
    var $btn3 = $("#guide>a.btn_03");
    var $btn4 = $("#guide>a.btn_04");
    
    var $box1 = $(".map_campus");
    var $box2 = $(".map_ground");
    var $box3 = $(".map_studio");
    var $box4 = $(".map_atelier");
    
    var $all = $(".maps");
    
    
    $all.hide();
    $box1.show();
    
    $btn1.on("click",function(evt){
        evt.preventDefault();
        $all.hide();
        $box1.stop().fadeIn(1000);
        
        $(".all").removeClass("on");
        $btn1.addClass("on");
        
    });
    $btn2.on("click",function(evt){
        evt.preventDefault();
        
        $all.hide();
        $box2.stop().fadeIn(1000);
        
        $(".all").removeClass("on");
        $btn2.addClass("on");
    });
    
    $btn3.on("click",function(evt){
        evt.preventDefault();
        
        $all.hide();
        $box3.stop().fadeIn(1000);
        
        $(".all").removeClass("on");
        $btn3.addClass("on");
    });
    $btn4.on("click",function(evt){
        evt.preventDefault();
        
        $all.hide();
        $box4.stop().fadeIn(1000);
        
        $(".all").removeClass("on");
        $btn4.addClass("on");
    });
    
    
    
});











