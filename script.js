$(document).ready(function(){
	$("#frame-one").delay(500).fadeIn().delay(1500).fadeOut("slow");
	$("#advert").delay(2500).fadeOut("slow",function(){
		
		setTimeout(function(){
			$("#months").hide();
		},2800);
	});
		
	$("input").delay(6500).fadeIn(1000,function(){
	      
		  $('.logo-button').find('input').removeClass().addClass('find-button-new');
		
	}).delay(1700).fadeOut("slow");
	
    $("#limited-offer").delay(6500).fadeIn(1000).delay(1800).fadeOut("slow");
		
	
	});
	
	//I used as less lines of code possible //