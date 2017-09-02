// JavaScript Document

$(document).ready(function(){
	    $("#div1").fadeIn();
        $("#div2").fadeOut();
        $("#div3").fadeOut();

		
		
	$("#about").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeOut();
        $("#div3").fadeOut();

	});
		
	$("#projects").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeIn();
        $("#div3").fadeOut();

	});
	
	$("#contact").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut();
        $("#div3").fadeIn();

    });
	
});