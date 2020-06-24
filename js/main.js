$(function(){

// 팝업
	$("#pop span").click(function(){
		$("#pop").fadeOut(500);
	});

	$(".logo").click(function(){
		$("#pop").fadeIn(500);
	});

// 메뉴
	$(".menuImg li, .menu li a").mouseover(function(){
		$(".menu li a").next().stop().slideDown(500);
		$(".menuBack").stop().slideDown(500);
	});

	$(".menuImg li, .menu li a").mouseout(function(){
		$(".menu li a").next().stop().slideUp(500);
		$(".menuBack").stop().slideUp(500);
	});

// 이미지 슬라이드
	$(".imgslide img").each(function(aa){
		$(this).css({left:aa*1200});
	});

	setInterval(function(){
		$(".imgslide img").each(function(){
			var nowLeft = parseInt($(this).css("left"));
			var moveLeft = nowLeft - 1200;
			$(this).animate({left:moveLeft}, 1000, function(){
				if(moveLeft<=-1200){
					$(this).css({left:"2400px"});
				}
			});	
		});
	}, 3000);

// 이미지 슬라이드 버튼
	$(".slidebtn li:eq(0)").mouseover(function(){
		$(this).children("img").attr("src", "images/arrowLH.png");
	});
	$(".slidebtn li:eq(0)").mouseout(function(){
		$(this).children("img").attr("src", "images/arrowL.png");
	});

	$(".slidebtn li:eq(1)").mouseover(function(){
		$(this).children("img").attr("src", "images/arrowRH.png");
	});
	$(".slidebtn li:eq(1)").mouseout(function(){
		$(this).children("img").attr("src", "images/arrowR.png");
	});

// 이벤트 이미지
	$(".eventImg li").mouseenter(function(){
		$(this).find("strong, span").fadeIn(500);
	});
	$(".eventImg li").mouseleave(function(){
		$(this).find("strong, span").fadeOut(500);
	});

// 비포애프터 이미지 슬라이드
	$(".beaf img").each(function(aa){
		$(this).css({left:aa*290});
	});
	
	$(".beafbtn .next").click(function(){
		var left=parseInt($(".beaf").css("left"));
		if(left<=-870){
			return;
		}
		console.log(left);
		var move=left-290;
		$(".beaf").animate({left:move},"slow");
	});
	
	$(".beafbtn .prev").click(function(){
		var left=parseInt($(".beaf").css("left"));
		if(left>=0){
			return;
		}
		console.log(left);
		var move=left+290;
		$(".beaf").animate({left:move},"slow");
	});

// 비포애프터 버튼
	$(".beafbtn .prev").mouseover(function(){
		$(this).children("img").attr("src", "images/arrowpreh.png");
	});
	$(".beafbtn .prev").mouseout(function(){
		$(this).children("img").attr("src", "images/arrowpre.png");
	});

	$(".beafbtn .next").mouseover(function(){
		$(this).children("img").attr("src", "images/arrownexh.png");
	});
	$(".beafbtn .next").mouseout(function(){
		$(this).children("img").attr("src", "images/arrownex.png");
	});
	
});

	