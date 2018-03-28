require(['modules/backbone-mozu',
		'underscore',
		'modules/jquery-mozu',
		'modules/api'
	],
	function (Backbone,
		_,
		$,
		Api) {

	var SlotMachineView = Backbone.MozuView.extend({
			templateName : "modules/slot-machine",
			initialize : function () {
				var me = this;
			}
		});

	//function to build mobile reels
		function reelMobile(slot) {
			for (var i = 0; i < 34; i = i + 1) {
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_1.jpg?max=45'></div>");
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_2.jpg?max=45'></div>");
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_3.jpg?max=45'></div>");
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_4.jpg?max=45'></div>");
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_5.jpg?max=45'></div>");
				$(slot).append("<div style='width: 45px; height: 38px;'><img src='/cms/files/reel_image_6.jpg?max=45'></div>");
			}
		}	

	//function to build tablet reels
		function reelTablet(slot) {
			for (var i = 0; i < 23; i = i + 1) {
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_1.jpg?max=105'></div>");
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_2.jpg?max=105'></div>");
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_3.jpg?max=105'></div>");
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_4.jpg?max=105'></div>");
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_5.jpg?max=105'></div>");
				$(slot).append("<div style='width: 105px; height: 88px;'><img src='/cms/files/reel_image_6.jpg?max=105'></div>");
			}
		}	
		
	//function to build desktop reels
		function reel(slot) {
			for (var i = 0; i < 17; i = i + 1) {
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_1.jpg'></div>");
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_2'></div>");
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_3.jpg'></div>");
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_4.jpg'></div>");
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_5.jpg'></div>");
				$(slot).append("<div style='width: 120px; height: 100px;'><img src='/cms/files/reel_image_6.jpg'></div>");
			}
		}			
		
	//Spin button code	
		function spin(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18) {		
				/* jshint ignore:start */
				var audio = new Audio('/audio-file-path/audio-file.mp3');//input audio file here
				audio.play();
				/* jshint ignore:end */
				
		//Mobile slot machine	
			if($(window).width() <= 737) {			
				$("#slot-roll1").css({ "top" : "-7524px" });
				$("#slot-roll1").animate({
					top : value9
				}, 5797, function () {});

				$("#slot-roll2").css({ "top" : "-7562px" });
				$("#slot-roll2").animate({
					top : value10
				}, 9310, function () {
					$("#image-result").attr({"src":value6, "alt":value8});
					$("#text-result").text(value7);
					$("#text-result").attr({size:2});
				});

				$("#slot-roll3").css({ "top" : "-7600px" });
				$("#slot-roll3").animate({
					top : value11
				}, 3857, function () {});
			
				$("#slot-roll4").css({ "top" : "-7638px" });
				$("#slot-roll4").animate({
					top : value12
				}, 7095, function () {});
			
				$("#slot-roll5").css({ "top" : "-7676px" });
				$("#slot-roll5").animate({
					top : value13
				}, 4897, function () {});
			} else if(($(window).width() > 737) && ($(window).width() <= 960)) {
		//Tablet slot machine
				$("#slot-roll1").css({ "top" : "-10032px" });
				$("#slot-roll1").animate({
					top : value14
				}, 5797, function () {});

				$("#slot-roll2").css({ "top" : "-10120px" });
				$("#slot-roll2").animate({
					top : value15
				}, 9310, function () {
					$("#image-result").attr({"src":value6, "alt":value8});
					$("#text-result").text(value7);
				});

				$("#slot-roll3").css({ "top" : "-10208px" });
				$("#slot-roll3").animate({
					top : value16
				}, 3857, function () {});
			
				$("#slot-roll4").css({ "top" : "-9768px" });
				$("#slot-roll4").animate({
					top : value17
				}, 7095, function () {});
			
				$("#slot-roll5").css({ "top" : "-9856px" });
				$("#slot-roll5").animate({
					top : value18
				}, 4897, function () {});			
			} else {	
		//Desktop slot machine					
				$("#slot-roll1").css({ "top" : "-9600px" });
				$("#slot-roll1").animate({
					top : value1
				}, 5797, function () {});

				$("#slot-roll2").css({ "top" : "-9700px" });
				$("#slot-roll2").animate({
					top : value2
				}, 9310, function () {
					$("#image-result").attr({"src":value6, "alt":value8});
					$("#text-result").text(value7);
				});

				$("#slot-roll3").css({ "top" : "-9800px" });
				$("#slot-roll3").animate({
					top : value3
				}, 3857, function () {});
			
				$("#slot-roll4").css({ "top" : "-9900px" });
				$("#slot-roll4").animate({
					top : value4
				}, 7095, function () {});
			
				$("#slot-roll5").css({ "top" : "-10000px" });
				$("#slot-roll5").animate({
					top : value5
				}, 4897, function () {});
			}			
		}
		
		
	//build reels	
	if($(window).width() <= 737) {
		//build mobile reels
		$("#slot-roll1").attr({"top":"-48px", "left":"0px"});
		$("#slot-roll2").attr({"top":"0px", "left":"50px"});
		$("#slot-roll3").attr({"top":"48px", "left":"100px"});
		$("#slot-roll4").attr({"top":"96px", "left":"150px"});
		$("#slot-roll5").attr({"top":"144px", "left":"200px"});

		$("#text-result").attr({"size":"4.8"});
			
		reelMobile("#slot-roll1"); 
		reelMobile("#slot-roll2");
		reelMobile("#slot-roll3");
		reelMobile("#slot-roll4");
		reelMobile("#slot-roll5");					
	} else if(($(window).width() > 737) && ($(window).width() <= 960)) {
		//build tablet reels 
		$("#slot-roll1").css({"top" : "0px", "left" : "0px"});
		$("#slot-roll2").css({"top" : "-88px", "left" : "107px"});
		$("#slot-roll3").css({"top" : "-176px", "left" : "214px"});
		$("#slot-roll4").css({"top" : "-264px", "left" : "321px"});
		$("#slot-roll5").css({"top" : "-352px", "left" : "428px"});
		
		$("#text-result").attr({"size":"6.8"});

		reelTablet("#slot-roll1"); 
		reelTablet("#slot-roll2");		
		reelTablet("#slot-roll3");
		reelTablet("#slot-roll4");
		reelTablet("#slot-roll5");		
	} else {
		//build desktop reels
		$("#slot-roll1").css({"top" : "-9600px", "left" : "0px"});
		$("#slot-roll2").css({"top" : "-9700px", "left" : "125px"});
		$("#slot-roll3").css({"top" : "-9800px", "left" : "250px"});
		$("#slot-roll4").css({"top" : "-9900px", "left" : "375px"});
		$("#slot-roll5").css({"top" : "-10000px", "left" : "500px"});
		
		$("#text-result").attr({"size":"6.8"});

		reel("#slot-roll1"); 
		reel("#slot-roll2");		
		reel("#slot-roll3");
		reel("#slot-roll4");
		reel("#slot-roll5");
	}	

//Slot machine click 
	$("#slot-machine-button").click(function(e) {
		
		$("#slot-machine-button").hide().delay(10000).queue(function(n) {
		$(this).show(); n();
		});
		
		$("#slot-machine-button-disabled").show().delay(10000).queue(function(n) {
		$(this).hide(); n();
		});
		
		var num = Math.random();
		
		
		//slot machine results
		if (num <= 0.07)
		{
			spin("-500px", "-500px", "-500px", "-200px", "0px", "/image-path/image-result-1.jpg", "Result-text-1", "Result-1", "-190px", "-190px", "-190px", "-76px", "0px", "-440px", "-440px", "-440px", "-176px", "0px");
		}
		else if (0.07 < num <= 0.14)
		{
			spin("-500px", "-500px", "-300px", "-300px", "-100px", "/image-path/image-result-2.jpg", "Result-text-2", "Result-2", "-190px", "-190px", "-114px", "-114px", "-38px", "-440px", "-440px", "-264px", "-264px", "-88px");
		}
		else if (0.14 < num <= 0.21)
		{
			spin("-500px", "-500px", "-500px", "-200px", "-400px", "/image-path/image-result-3.jpg", "Result-text-3", "Result-3", "-190px", "-190px", "-190px", "-76px", "-152px", "-440px", "-440px", "-440px", "-176px", "-352px");
		}
		else if (0.21 < num <= 0.28)
		{
			spin("-500px", "-500px", "-100px", "-100px", "-300px", "/image-path/image-result-4.jpg", "Result-text-4", "Result-4", "-190px", "-190px", "-38px", "-38px", "-114px", "-440px", "-440px", "-88px", "-88px", "-264px");
		}
		else if (0.28 < num <= 0.35)
		{
			spin("-500px", "-500px", "-0px", "-300px", "-200px", "/image-path/image-result-5.jpg", "Result-text-5", "Result-5", "-190px", "-190px", "0px", "-114px", "-76px", "-440px", "-440px", "0px", "-264px", "-176px");
		}
		else if (0.35 < num <= 0.42)
		{
			spin("-500px", "-500px", "-500px", "-200px", "-200px", "/image-path/image-result-6.jpg", "Result-text-6", "Result-6", "-190px", "-190px", "-190px", "-76px", "-76px", "-440px", "-440px", "-440px", "-176px", "-176px");
		}
		else if (0.42 < num <= 0.49)
		{
			spin("-500px", "-300px", "-300px", "-300px", "-100px", "/image-path/image-result-7.jpg", "Result-text-7", "Result-7", "-190px", "-114px", "-114px", "-114px", "-38px", "-440px", "-264px", "-264px", "-264px", "-88px");
		}
		else if (0.49 < num <= 0.56)
		{
			spin("-500px", "0px", "0px", "-400px", "-200px", "/image-path/image-result-8.jpg", "Result-text-8", "Result-8", "-190px", "0px", "0px", "-152px", "-76px", "-440px", "0px", "0px", "-352px", "-176px");
		}		
		else if (0.56 < num <= 0.63)
		{
			spin("-500px", "-500px", "-100px", "-400px", "-300px", "/image-path/image-result-9.jpg", "Result-text-9", "Result-9", "-190px", "-190px", "-38px", "-152px", "-114px", "-440px", "-440px", "-88px", "-352px", "-264px");
		}
		else if (0.63 < num <= 0.7)
		{
			spin("-500px", "-500px", "-200px", "-200px", "-400px", "/image-path/image-result-10.jpg", "Result-text-10", "Result-10", "-190px", "-190px", "-76px", "-76px", "-152px", "-440px", "-440px", "-176px", "-176px", "-352px");
		}
		else if (0.7 < num <= 0.77)
		{
			spin("-500px", "-100px", "-100px", "-100px", "-300px", "/image-path/image-result-11.jpg", "Result-text-11", "Result-11", "-190px", "-38px", "-38px", "-38px", "-114px", "-440px", "-88px", "-88px", "-88px", "-264px");
		}
		else if (0.77 < num <= 0.84)
		{
			spin("-500px", "-500px", "-200px", "-400px", "0px", "/image-path/image-result-12.jpg", "Result-text-12", "Result-12", "-190px", "-190px", "-76px", "-152px", "0px", "-440px", "-440px", "-176px", "-352px", "0px");
		}	
		else if (0.84 < num <= 0.91)
		{
			spin("-500px", "-500px", "0px", "0px", "-200px", "/image-path/image-result-13.jpg", "Result-text-13", "Result-13", "-190px", "-190px", "0px", "0px", "-76px", "-440px", "-440px", "0px", "0px", "-176px");
		}
		else 
		{
			spin("-500px", "-500px", "-500px", "-300px", "0px", "/image-path/image-result-14.jpg", "Result-text-14", "Result-14", "-190px", "-190px", "-190px", "-114px", "0px", "-440px", "-440px", "-440px", "-264px", "0px");
		}		
	});		

});


