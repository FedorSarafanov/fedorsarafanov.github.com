$(function () {
    // var context;

    // if (typeof AudioContext !== "undefined") {
    //     context = new AudioContext();
    // } else if (typeof webkitAudioContext !== "undefined") {
    //     context = new webkitAudioContext();
    // } 

    // var lastTime = 0;
    // var vendors = ['ms', 'moz', 'webkit', 'o'];
    // for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    //     window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    //     window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
    //                                 || window[vendors[x] + 'CancelRequestAnimationFrame'];
    // }

    // if (!window.requestAnimationFrame)
    //     window.requestAnimationFrame = function (callback, element) {
    //         var currTime = new Date().getTime();
    //         var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    //         var id = window.setTimeout(function () { callback(currTime + timeToCall); },
    //             timeToCall);
    //         lastTime = currTime + timeToCall;
    //         return id;
    //     };

    // if (!window.cancelAnimationFrame)
    //     window.cancelAnimationFrame = function (id) {
    //         clearTimeout(id);
    //     };

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext ();        


    var analyser = context.createAnalyser();
    analyser.fftSize = 64;
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
	var barSpacingPercent = 100 / analyser.frequencyBinCount;
    var canva = document.getElementById("equ"),


    ww = canva.width;
    hh = $(window).height()/3;
    point = canva.getContext('2d');     
    point.fillStyle = "#26A9AE";
    point.strokeStyle = "orange";
    var fulltime =  $("#player")[0].duration;
    var player = $("#player")[0];
    var slider = $(".slider");

    function progress() {
        slider.css('border-bottom-width',(100/player.duration*player.currentTime)+'vh');
    }

    // Get the frequency data and update the visualisation
    function update() {
        requestAnimationFrame(update);
        analyser.getByteFrequencyData(frequencyData);
        for (var i = 0; i < analyser.frequencyBinCount; i++) {
            var left = i * barSpacingPercent;
            var height = frequencyData[i];
            point.clearRect(9*i, 0, 7, hh); 
            point.fillRect(9*i, hh-height, 7, height);
            progress()
        }        
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
    update();
});

    // function randcolor(){
    //     var r=Math.floor(Math.random() * (256));
    //     var g=Math.floor(Math.random() * (256));
    //     var b=Math.floor(Math.random() * (256));
    //     var c='#' + r.toString(16) + g.toString(16) + b.toString(16);
    //     return c;
    // }
