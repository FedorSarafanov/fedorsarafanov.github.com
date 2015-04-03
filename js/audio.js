$(function () {
    // Future-proofing...
    var context;

    if (typeof AudioContext !== "undefined") {
        context = new AudioContext();
    } else if (typeof webkitAudioContext !== "undefined") {
        context = new webkitAudioContext();
    } else {
        $(".hideIfNoApi").hide();
        $(".showIfNoApi").show();
        return;
    }

    // Overkill - if we've got Web Audio API, surely we've got requestAnimationFrame. Surely?...
    // requestAnimationFrame polyfill by Erik Möller
    // fixes from Paul Irish and Tino Zijdel
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                    || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };

    // Create the analyser
    var analyser = context.createAnalyser();
    analyser.fftSize = 64;
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // Set up the visualisation elements
    var visualisation = $("#visualisation");
    var visualisation2 = $("#visualisation2");
	var barSpacingPercent = 100 / analyser.frequencyBinCount;
    for (var i = 0; i < analyser.frequencyBinCount; i++) {
    	$("<div/>").css("left", i * barSpacingPercent + "%")
			.appendTo(visualisation);
            // alert()
        // $("<div/>").css("right", i * barSpacingPercent + "%")
        //             .appendTo(visualisation2);            
    }
    var bars = $("#visualisation > div");
    var bars2 = $("#visualisation2 > div");

    var example = document.getElementById("equ"),


    ww= example.width;
    hh= example.height;
    hh = $(window).height()/3;
    ctx         = example.getContext('2d');     
    ctx.fillStyle = "#26A9AE";
    ctx.strokeStyle = "orange";
    var fulltime =  $("#player")[0].duration;
    var player = $("#player")[0];
// 

    function randcolor(){
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
        return c;
    }

    // Get the frequency data and update the visualisation
    function update() {
        requestAnimationFrame(update);
        analyser.getByteFrequencyData(frequencyData);
        for (var i = 0; i < analyser.frequencyBinCount; i++) {
            var left = i * barSpacingPercent;
            var height = frequencyData[i];
            // if (i>20) {
                // ctx.fillStyle = randcolor();
            // };
            ctx.clearRect(9*i, 0, 7, hh); 
            ctx.fillRect(9*i, hh-height, 7, height);
            $('.slider').css('border-bottom-width',(100/$("#player")[0].duration*$("#player")[0].currentTime)+'vh');
            // ctx.fillRect(2*i, 10, 5, height);

        }     

        // bars.each(function (index, bar) {
        //     // $('.article-title').html(bars.length)
        //     bar.style.height = frequencyData[index] + 'px';
        //     // console.log(frequencyData[index] + 'px')
        // });
        // bars2.each(function (index, bar) {
        //     // bar.style.height = frequencyData[index] + 'px';
        // });        
    };

    // Hook up the audio routing...
    // player -> analyser -> speakers
	// (Do this after the player is ready to play - https://code.google.com/p/chromium/issues/detail?id=112368#c4)
	$("#player").bind('canplay', function() {
		var source = context.createMediaElementSource(this);
		source.connect(analyser);
		analyser.connect(context.destination);
	});
    $("#player").bind('ended', function() {
        alert('(');
    });


    // Kick it off...
    update();
});