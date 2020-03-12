$(function(){
    var nowIdx = 0;
    var $indicator = $(".slides-pagination>li>a");
	var intervalId = null;
    var $mov_1 = document.getElementById("mov_1"); 
    var $mov_2 = document.getElementById("mov_2"); 
    var $mov_3 = document.getElementById("mov_3"); 
    var $mov_4 = document.getElementById("mov_4"); 
    
    //처음 로드됬을 때 1번 동영상 플레이
    $(window).load(function(){
        $mov_1.play();
    });
    
     $indicator.click(function(evt){
            evt.preventDefault();
            nowIdx = $indicator.index(this);
         
            $(".slides>.slides-container").stop().animate({
                "left":-1670*nowIdx
            });
            $indicator.eq(nowIdx).parent("li").addClass("on").siblings().removeClass("on");
         
            $mov_1.pause();
            $mov_2.play();
            
         if(nowIdx==0){
            
            $mov_1.play();
            }else if(nowIdx==1){
                $mov_1.pause();
                $mov_2.play();
            }else if(nowIdx==2){
                $mov_2.pause();
                $mov_3.play();
            }else{
                $mov_3.pause();
                $mov_4.play();
            }
    });
    
        
    //이전버튼
    $(".slides-prev").click(function(evt){
        evt.preventDefault();
        if(nowIdx>=1){
            nowIdx = nowIdx-1;
        }else{
            nowIdx = 3;
        }
        $(".slides>.slides-container").stop().animate({
            "left":-1670*nowIdx
        });
        
        $indicator.parent().removeClass("on");
        $indicator.eq(nowIdx).parent().addClass("on");
        $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
        
        $mov_1.pause();
        $mov_2.play();
            
         if(nowIdx==0){
            
            $mov_1.play();
            }else if(nowIdx==1){
                $mov_1.pause();
                $mov_2.play();
            }else if(nowIdx==2){
                $mov_2.pause();
                $mov_3.play();
            }else{
                $mov_3.pause();
                $mov_4.play();
            }
        
    });
    
    //다음버튼
    $(".slides-next").click(function(evt){
        evt.preventDefault();
        if(nowIdx<=2){
            nowIdx = nowIdx+1;
        }else{
            nowIdx=0;
        }
        $(".slides>.slides-container").stop().animate({
            "left":-1670*nowIdx
        });
       $indicator.eq(nowIdx).parent().addClass("on"); $indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
        
        
        $mov_1.pause();
        $mov_2.play();
            
        if(nowIdx==0){
            
            $mov_1.play();
            }else if(nowIdx==1){
                $mov_1.pause();
                $mov_2.play();
            }else if(nowIdx==2){
                $mov_2.pause();
                $mov_3.play();
            }else{
                $mov_3.pause();
                $mov_4.play();
            }
    });
       
});


//스크롤
$(function(){
    var $mnu = $(".gnb>li>a");//메인메뉴
    var $container = $("section"); 
    var nowIdx = 0;
    
    var arrTopVal = [];
    
    arrTopVal[0] = $(".container-0").offset().top;
    arrTopVal[1] = $(".container-1").offset().top;
    arrTopVal[2] = $(".container-2").offset().top+130;
    arrTopVal[3] = $(".container-3").offset().top;
    arrTopVal[4] = $(".container-4").offset().top;
    
    console.log("arrTopVal = ", arrTopVal);
    
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        
        for(var i=0;i<$mnu.size();i++){
            if(scrollTop >= arrTopVal[i]-100){
                $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
        
            }
        }
        
        
    });
    
    $mnu.click(function(evt){
        evt.preventDefault();
        nowIdx = $mnu.index(this);
        $("html,body").stop().animate({
            "scrollTop":arrTopVal[nowIdx]-70
        });
			
    });

});
     

//두번째 슬라이드
$(function(){
    nowIdx = 0;
    var intervalID = null;
    var $sideBanr = $(".story_container");
    var $button = $(".story_prve_next>.click_btn");
        
    //이전
    $(".story_prve_next>.prev").click(function(evt){
        evt.preventDefault();
        
        if(nowIdx>=1){
            nowIdx = nowIdx-1;
        }else{
            nowIdx = 3;
        }
        
        $(".story_container").stop().animate({
            "left":-1200*nowIdx
        });
        
       
    });
    
    //다음버튼
    $(".story_prve_next>.next").click(function(evt){
        evt.preventDefault();
        
        if(nowIdx<3){
            nowIdx = nowIdx+1;
        }else{
            nowIdx=0;
        }
        $(".story_container").stop().animate({
            "left":-1200*nowIdx
        });
    });
    
    
    
});



    
/********빵********/
$(function(){
    var nowIdx = 0;
    var $slides = $(".bread_slides_container>li");
    var $part = $(".bread_slides_container>li>a:first-child");
    var $totArea = $(".bread_slides_container>li>a:last-child");

    $part.click(function(evt){
        evt.preventDefault();
        nowIdx = $part.index(this);
        $(this).hide();

        $slides.eq(nowIdx).stop().animate({
            "left":0
        },300,"easeInOutCubic");
        
        //i는 4장의 인덱스를 의미
        for(var i=0;i<4;i++){
            
            if(nowIdx==i){
                $slides.eq(i).stop().animate({
                "left":0
                },300,"easeInOutCubic");
            }else{
                if(nowIdx<i){
                        $slides.eq(i).stop().animate({
                        "left":1200
                        },300,"easeInOutCubic");
                    
                
                   }else if(nowIdx>i){ 
                        $slides.eq(i).stop().animate({
                        "left":-1200
                        },300,"easeInOutCubic");
                   }
            }
        }
        
    });
    
    $totArea.mouseout(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });
    $totArea.click(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });

 
});

//패스트리
$(function(){
    var nowIdx = 0;
    var $slides = $(".bread_slides_container_2>li");
    var $part = $(".bread_slides_container_2>li>a:first-child");
    var $totArea = $(".bread_slides_container_2>li>a:last-child");
    

    $part.click(function(evt){
        evt.preventDefault();
        nowIdx = $part.index(this);
        $(this).hide();

        $slides.eq(nowIdx).stop().animate({
            "left":0
        },300,"easeInOutCubic");
        
        //i는 4장의 인덱스를 의미
        for(var i=0;i<4;i++){
            
            if(nowIdx==i){
                $slides.eq(i).stop().animate({
                "left":0
                },300,"easeInOutCubic");
            }else{
                if(nowIdx<i){
                        $slides.eq(i).stop().animate({
                        "left":1200
                        },300,"easeInOutCubic");
                    
                
                   }else if(nowIdx>i){ 
                        $slides.eq(i).stop().animate({
                        "left":-1200
                        },300,"easeInOutCubic");
                   }
            }
        }
        
    });
    
    $totArea.mouseout(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });
    $totArea.click(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });

 
});

//도넛
$(function(){
    var nowIdx = 0;
    var $slides = $(".bread_slides_container_3>li");
    var $part = $(".bread_slides_container_3>li>a:first-child");
    var $totArea = $(".bread_slides_container_3>li>a:last-child");
    

    $part.click(function(evt){
        evt.preventDefault();
        nowIdx = $part.index(this);
        $(this).hide();

        $slides.eq(nowIdx).stop().animate({
            "left":0
        },300,"easeInOutCubic");
        
        //i는 4장의 인덱스를 의미
        for(var i=0;i<4;i++){
            
            if(nowIdx==i){
                $slides.eq(i).stop().animate({
                "left":0
                },300,"easeInOutCubic");
            }else{
                if(nowIdx<i){
                        $slides.eq(i).stop().animate({
                        "left":1200
                        },300,"easeInOutCubic");
                    
                
                   }else if(nowIdx>i){ 
                        $slides.eq(i).stop().animate({
                        "left":-1200
                        },300,"easeInOutCubic");
                   }
            }
        }
        
    });
    
    $totArea.mouseout(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });
    $totArea.click(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });

 
});
//건강 빵
$(function(){
    var nowIdx = 0;
    var $slides = $(".bread_slides_container_4>li");
    var $part = $(".bread_slides_container_4>li>a:first-child");
    var $totArea = $(".bread_slides_container_4>li>a:last-child");
    

    $part.click(function(evt){
        evt.preventDefault();
        nowIdx = $part.index(this);
        $(this).hide();

        $slides.eq(nowIdx).stop().animate({
            "left":0
        },300,"easeInOutCubic");
        
        //i는 4장의 인덱스를 의미
        for(var i=0;i<4;i++){
            
            if(nowIdx==i){
                $slides.eq(i).stop().animate({
                "left":0
                },300,"easeInOutCubic");
            }else{
                if(nowIdx<i){
                        $slides.eq(i).stop().animate({
                        "left":1200
                        },300,"easeInOutCubic");
                    
                
                   }else if(nowIdx>i){ 
                        $slides.eq(i).stop().animate({
                        "left":-1200
                        },300,"easeInOutCubic");
                   }
            }
        }
        
    });
    
    $totArea.mouseout(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });
    $totArea.click(function(evt){
        evt.preventDefault();
        
        $part.show();
        for(var i=0;i<4;i++){
            $slides.eq(i).stop().animate({
                "left":300*i
            },300);
        } 
    });

 
});



//구글지도
$(function(){
    var location = new google.maps.LatLng(37.49811530931608, 127.0262721750563);
    
    var mapInfo = {
		"center": location,
		"zoom": 16, 
		mapTypeId:google.maps.MapTypeId.ROADMAP
		
	}
    var myMap = new google.maps.Map(document.getElementById("map"),mapInfo);
    
     new google.maps.Marker({
		 "position":location,
		 "map": myMap,
		 "title": "서초 아라타워 뚜레쥬르"
	 });
    
    
//라이트박스
    $(".lightbox>.clse").click(function(evt){
        evt.preventDefault();
        $(".lightbox").fadeOut(700);
        
    });
    
    
});

