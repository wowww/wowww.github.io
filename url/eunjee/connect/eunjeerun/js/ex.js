$(function(){
    $(".loading>div").fadeIn();
    $(".loading").fadeOut(240,function(){
        $(this).remove();
    });//end of 로딩중
    
    
    //리사이즈
    $(window).on("load resize",function(){
        $("#slides").width($(this).width());
    });    
    
    var $mnu = $(".slides-pagination>ul>li>a");
    var $bar = $(".slides-pagination>.bar>ol");
    var $circle = $(".slides-pagination>.bar>ol>li");
    
    var aniChk = false; //페이지가 에니메이트 중인지 표현하는 변수
    
    var idx = 0;
    var oldIdx = idx;
    
    var nowIdx = 0;
    var arrLftVal = [];
    
    
    //DOM Tree 구성 완료 시점에 작동
    $("#slides>.bgi>li").each(function(idx){
        arrLftVal[idx] = $("#slides>.bgi>li").eq(idx).offset().left;
    });
    $(window).on("resize", function(){
        $("#slides>.bgi>li").each(function(idx){
            arrLftVal[idx]=$("#slides>.bgi>li").each(idx).offset().left;
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
        $("hyml,body").stop().animate({
            "scrollLeft":arrLftVal[idx]
        },function(){
            aniChk = false;
        });
        
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
    });
    
    //페이지 load된 시점에 작동
    $(window).load(function(){
        pageAni(arrLftVal[nowIdx]);
    });
    
    //스크롤 left값에 따른 메뉴의 활성화 표시
    $(window).scroll(function(){
        var scrollLeft = $(window).scrollLeft();
        var $all = $(window).width();
        
        for(var i=0;i<4;i++){
            
        }
    });
    
    
});







#slides .box1>.shadow>.lightbox>p:after{
        top: 105px;/*수정*/
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(1){
        top: 90px;/*수정*/
    }
    /*고양이*/
    #slides .box1>.shadow>.lightbox>p>span:nth-child(1):after{
        top: 30px;/*수정*/
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(2){
        top: 190px;/*수정*/
        font-size: 15px;/*수정*/
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(3){
        position: relative;
        top: 430px;
        height: 100%;
        z-index: 100;
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(3)>span{
        margin-left: -5%;/*수정*/
        width: 42%;/*수정*/
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(3):before{
        margin-left: -25%;/*수정*/
        width: 42%;/*수정*/
    }
    #slides .box1>.shadow>.lightbox>p>span:nth-child(3)>button{
        margin-left: 57%;/*수정*/
    }





