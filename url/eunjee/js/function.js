$(function(){


	//.on은 '~할 때'로 해석
	$(window).on("load resize", function(){
		
		$("#home").height($(this).height());
		
		$(".intro").css({
			"margin-top" : -$(".intro").height()/2
		});
		

		
		
		if($(window).width()>=768){//PC
			
			$("h1").css({
				"top" : $("#home h2").offset().top - 80,		
				"margin-left" : -$("h1").width()/2
			});			
			
		}else{//모바일
		
			$("h1").css({
				"top" : $("#home h2").offset().top - 50,		
				"margin-left" : -$("h1").width()/2
			});
			
		}
		
	});
    
    
    
	
	//애니큐빅
	$(".loading>p").fadeIn(3000);
	$(".loading").delay(3000).fadeOut(400,function(){
		$(this).remove();
	});
	
	
	//시간차효과를 쉽게 구현할 수 있는 Stella 플러그인
	$.stellar({
		horizontalScrolling: false,
		responsive: true,
		verticalOffset: 1150
	});
});


//헤더영역
$(function(){
	var $header = $("header");
	var $nav = $("header>.container>nav");
    /////////////////////////
    var $gnb = $nav.find("a");
    var arrContH = []; //각 섹션의 top값을 저장할 변수
	
    var setPosSect = function(){
        
        arrContH.splice(0);//배열의 기존 내용(데이터)을 모두 삭제
        
        //.push() 메소드는 오리지널 자바스크립트에서 지원하는 메소드로 배열의 맨 마지막에 값을 추가하는 역할
        arrContH.push($("#home").offset().top);
        
        $("header~section").not("#slides,#skills").each(function(){
        
            arrContH.push($(this).offset().top);
            
        });
        
    };
    
	var $gnbBtn = $("header>.container>.btn-gnb");//768px 이하에서만 나타나는 메뉴버튼
	
	
	$(window).on("load resize", function(){
        ///////////////////////
        setPosSect();
		
			
		
	});
	
	
	$(window).on("scroll", function(){
		
		var scrollTop = $(this).scrollTop();//현재의 스크롤바 top 값
		
		if(scrollTop>$("#home").height()){
			
			$header.addClass("n-fixed");
			$("#aboutme").css({
				"margin-top" : $header.height()
			});
			
		}else{
			
			$header.removeClass("n-fixed");
			$("#aboutme").css({
				"margin-top" : 0
			});
		}
        
        //스크롤 높이값에 따른 메뉴 활성화 표시
        /////////////////////////////////////////////
        for(var i=0;i<$gnb.size();i++){
            //66은 gnb의 높이인데 68인 이유 : 밑에 보더(2px) 때문에
            if(scrollTop>=arrContH[i]-68){
               $gnb.eq(i).parent().addClass("on").siblings().removeClass("on");
            }
            
        }
        
        

        
	});//end of scroll
	

    
    
    //메뉴에 대한 클릭이벤트 구문
    ///////////////////////////////////////
    $gnb.on("click",function(evt){
        evt.preventDefault();
        
        var nowIdx = $gnb.index(this);
        $gnb.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");//메뉴 활성화 표시
        
        //해당 섹션으로 이동
        $("html,body").stop().animate({
            "scrollTop":arrContH[nowIdx]-66
        },400,"easeInOutCubic");
        
        //모바일에서만 해당메뉴클릭할 때 메뉴없어지게
        if($(window).width()<=767){
           $gnbBtn.trigger("click");
           
        }
    });

    
	$(window).on("load", function(){
		new WOW().init();//WOW 플러그인 연동
	});
});




//기술영역(#skills)
$(function(){
	
	//inview 이벤트는 화면이 요소가 출현했을 때 작동
	$("#skill").on("inview", function(evt, visible){
		if(visible==true){
			console.log("inview 이벤트 작동완료");
			
			$("#skill .bar").each(function(){
				$(this).css({
				//	"width" : $(this).children("span").text()
				
					"width" : $(this).parent().attr("data-bar")+"%"
				});
			});
			
		}
	});
	
	
	$(window).on("scroll", function(){
		if($(this).scrollTop() < $("#skill").offset().top-$(this).height()){
			
			$("#skill .bar").width(0);
		}
	});

	
	$(".circle").on("inview", function(evt, visible){
		
		if(visible==true){
			
			$('.chart').easyPieChart({
				//your configuration goes here
				easing: 'easeInOutCubic',
				delay: 3000,
				barColor:'#68c3a3',
				trackColor:'rgba(255,255,255,0.2)',
				scaleColor: false,
				lineWidth: 8,
				size: 140,
				animate: 2000,
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}

			});
			
			
		}
		
	});
    
    $("#skill>.abilty-click,.link>a").on("click",function(evt){
        evt.preventDefault();
        
        $("#skill>.stick").hide();
        $("#skill>.abilty-text>div").stop().css({
            "display":"block"
        });
    });
    
});


//포트폴리오(shuffle 플러그인 설정)
$(function(){
	
	//1단계 - 셔플 아이템의 부모를 셀렉팅
	var $grid = $("#portfolio .grid");
	
	
	//2단계 - .shuffle() 메소드 연결
	$grid.shuffle({
		"itemSelector" : ".item"
	});	
	
	$("#portfolio .filter a").on("click", function(evt){
		evt.preventDefault();		
		
		$(this).parent().addClass("on").siblings().removeClass("on");
		
		//3단계 - 선택할 셔블그룹정보 가져오기
		var groupName = $(this).attr("data-group");
		
		
		//4단계 - .shuffle() 메소드에 전달
		$grid.shuffle("shuffle",groupName);
	});
	
});

//구글맵
$(function(){
	//지도에 나타내고자 하는 장소에 대한 위도/경도 값
	//37.498759, 127.026836
	
	//var location = new google.maps.LaTLng(?,?)
	var location = new google.maps.LatLng(37.288420, 127.051558);
	
	//구글맵 옵션 지정
	var mapInfo = {
		"center": location,
		"zoom": 16, //1~21사이, 16을 가장 많이 사용
		mapTypeId:google.maps.MapTypeId.ROADMAP
		
	}
	//구글맵 지도객체 생성
	//new google.maps.Map(document.getElementById("map"),구글맵옵션);
	var myMap = new google.maps.Map(document.getElementById("map"),mapInfo);
	
	//구글맵에 마커 연결
	 new google.maps.Marker({
		 "position":location,
		 "map": myMap,
		 "title": "경기도 수원시 영통구 이의동"
	 });
	 
});







//스크롤 화살표(오른쪽 하단)
$(function(){
    
    $(window).on("scroll",function(){
        //현재 스크롤바의 top값
        var scrollTop = $(this).scrollTop();
        
        if(scrollTop>=500){
            $("aside").stop().fadeIn();
        }else{
            $("aside").stop().fadeOut();
        }
        
        //footer 요소의 거리값 
        /*var view = scrollTop + $(window).height() - $("footer").offset().top*/
        
        /*
            view >= 0 이면 footer가 보인다. footer를 지나간다.
            
            1. 스크롤바를 내렸을 때 footer가 노출되는 시점의 scrollTop 값과 브라우저의 높이값을 더한 값에 footer의 offset().top 값을 빼면 정확히 0이 나온다.
            
            2. 만약 더 내리면 결과값이 양수가 나오는 성질을 이용함.
            
            3. 즉, 양수이면 해당 footer요소가 노출됬다는 것을 의미한다.
            
        */
       /* 
        if(view>0){//footer가 노출됬다.
            $("aside").css("margin-bottom",view);
            
        }else{
           $("aside").css("margin-bottom",0);
           
        }*/
        
        
        //로고밑 탑버튼을 이동하면 최상단으로 이동
        $(".logo,aside").on("click",function(evt){
            evt.preventDefault();
            
            $("html,body").stop().animate({
                "scrollTop":0
            },400,"easeInOutCubic");
            
            
            
        });
        
        $(window).on("load",function(){
            
            $("html,body").stop().animate({
                "scrollTop":0
            },400,"easeInOutCubic");
            
            //이거대신 .trigger("click") 써도 됨.
            
        });
        
    });
    
    
    
    
});






