	//currentTime
		var ctx = document.getElementById("my_live").getContext("2d");	
		var options = {
    		animation: false
		};
		var data = {
		    labels: ["1998", "Август 2005", "Сентябрь 2005", "2009", "2010", "2011", "2012", "2013","Сентябрь 2014", "Август 2014","Декабрь 2014","Апрель 2015"],
		    datasets: [
		        // {
		        //     label: "My First dataset",
		        //     fillColor: "rgba(220,220,220,0.2)",
		        //     strokeColor: "rgba(220,220,220,1)",
		        //     pointColor: "rgba(220,220,220,1)",
		        //     pointStrokeColor: "#fff",
		        //     pointHighlightFill: "#fff",
		        //     pointHighlightStroke: "rgba(220,220,220,1)",
		        //     data: [65, 59, 80, 81, 56, 55, 40]
		        // },
		        {
		            label: "My Second dataset",
		            fillColor: "rgba(151,187,205,0.0)",
		            strokeColor: "#26A9AE",
		            pointColor: "#26A9AE",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [88, 85, 77, 88, 90, 77, 80,90,95, 60,50,96]
		        }
		    ]
		};
		var myLineChart = new Chart(ctx).Line(data,options);
		document.getElementById("my_live").onclick = function(evt){
		    var activePoints = myLineChart.getPointsAtEvent(evt);
		    if (activePoints[0].value==50) {
		    	$('#player').attr('src','audio/sbl.mp3')
		    	document.getElementById('player').play();
		    	$('body').css('background','url(img/bg.jpg)')
		    };
		    if (activePoints[0].value==95) {
		    	$('#player').attr('src','audio/yas.mp3')
		    	document.getElementById('player').play();
		    	$('body').css('background','url(img/yas.jpg)')		    	
		    };

		    // if (activePoints[0].value==77) {
		    // 	$('#player').attr('src','audio/b320aa31a407.mp3')
		    // 	document.getElementById('player').play();
		    // 	$('body').css('background','url(img/bg.jpg)')		    	
		    // };

		    if (activePoints[0].value==96) {
		    	$('#player').attr('src','audio/180.mp3')
		    	document.getElementById('player').play();
		    	$('body').css('background','url(img/180.jpg)')		    	
		    };		    
		    
		    // => activePoints is an array of points on the canvas that are at the same position as the click event.
		};		


// <!-- 	    <button onclick="document.getElementById('player').play(); $('body').css('background','url(img/bg.jpg)')">Воспроизведение</button>
// 	    <button onclick="document.getElementById('player').pause()">Пауза</button>
// 	    <button onclick="document.getElementById('player').volume+=0.2">Громкость +</button>
// 	    <button onclick="document.getElementById('player').volume-=0.2">Громкость -</button> -->	

	pl =true;
$("body").click(function(e){
	if ((e.pageX>100)&&(e.pageX<400)){
		// $(window).height()/10
		for (var i = 10; i >= 1; i--) {
			if ((e.pageY<=i*$(window).height()/10)&&(e.pageY>=(i-1)*$(window).height()/10)){
				document.getElementById('player').volume=i/10;
			}
		};
		// alert(e.pageX +', '+ e.pageY);
	}

			if ((e.pageY<=$(window).height()/2+40)&&(e.pageY>=$(window).height()/2-40)){
				if ((e.pageX>0)&&(e.pageX<150)){
					if (pl==true){
					document.getElementById('player').pause();
					pl = false;
					}else
					{
					document.getElementById('player').play(); 	
					pl=true;
					}
					
				}
			}	
    
});	