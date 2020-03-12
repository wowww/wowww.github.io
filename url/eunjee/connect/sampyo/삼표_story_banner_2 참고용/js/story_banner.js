$(function(){
	
	var $storyTit = $(".story>ul>li>h2");
	var nowIdx = 0;
	var intervalID = null;
	
	$storyTit.click(function(){
		$(this).parent().stop().fadeOut();
		$(this).parent().siblings().stop().fadeIn();

		$(".btn_pause").addClass("on").siblings().removeClass("on");
		
		clearInterval(intervalID);
	});

	
	
	$(".btn_play").click(function(evt){
		evt.preventDefault();
		
		clearInterval(intervalID);	

		$(this).addClass("on").siblings().removeClass("on");
		
		intervalID = setInterval(function(){

			$storyTit.parents().eq(nowIdx).stop().fadeOut();	
			
			if(nowIdx==0){
				nowIdx = 1;
			}else{
				nowIdx = 0;
			}

			$storyTit.parents().eq(nowIdx).stop().fadeIn();

					
		},4000);

	});
	
	
	$(".btn_pause").click(function(evt){
		evt.preventDefault();

		$(this).addClass("on").siblings().removeClass("on");		
		clearInterval(intervalID);
	});	
	
	
	$(window).load(function(){
		
		$(".btn_play").addClass("on").siblings().removeClass("on")
	
		intervalID = setInterval(function(){

			console.log("1-nowIdx = ", nowIdx);
			
			$(".story>ul>li").eq(nowIdx).stop().fadeOut();	
			
			if(nowIdx==0){
				nowIdx = 1;
			}else{
				nowIdx = 0;
			}
			
			console.log("2-nowIdx = ", nowIdx);
			console.log("---------------------");
			

			$(".story>ul>li").eq(nowIdx).stop().fadeIn();
		},4000);

	});
	
});













