$(function(){

	var $btnGnb = $(".btn-gnb");

	$btnGnb.on("click", function(){//bind = on ~할 때
		$(this).toggleClass("clse");
		$("header>.container>nav").toggleClass();

	});	


});