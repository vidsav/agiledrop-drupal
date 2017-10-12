var $ = jQuery;
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
		var wdth = $(window).width();
    if(wn > 50){
    	   $("header").css("background","rgba(1,1,1,1)");
        $("header a").css("color","white");

	}else{
    	   $("header").css("background","transparent");
        $("header a").css("color","black");
			}
     if(wdth < 610 && wn > 50){
		 		$("header").css("top","0px");
		 }else{
		 		$("header").css("top","80px");
		 }
  });
});
