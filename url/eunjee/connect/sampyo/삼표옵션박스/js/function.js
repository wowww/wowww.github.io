$(function(){
    //입력상자와 버튼에 대한 클릭이벤트 구문
    $("#path input, #path button").click(function(){
        $(this).parent().next().stop().toggle(); //해당리스트출력
        
    });
    //#path 영역에서  mouseleave 이벤트 구문
    $("#path").mouseleave(function(){
        $("#path .list").hide();
        
    });
    
    //list 항목 클릭시 input요소에 값 넣기
    $("#path .list").find("a").click(function(evt){
        evt.preventDefault();
        
        var str = $(this).text();
        $(this).parents(".list").prev().children("input").val(str);
        $("#path .list").hide();
        
    });
});



/*패밀리사이트*/
$(function(){
    $("#family_site>a").click(function(evt){
        evt.preventDefault();
        
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $("#family_site>.list").stop().animate({
                "height":0
            },200,function(){
                $(this).css({
                    "border":"none"
                });
            });
           
        }else{
            $(this).addClass("on");
            $("#family_site>.list").css({
                "border":"1px solid #0AA1E1"
            }).stop().animate({
                "height":180
            },200);
           
        }
    
    });
});