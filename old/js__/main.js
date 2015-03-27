if (typeof console == "undefined") {
    this.console = {log: function() {}};
}

var clips = [];
var messages = ['COPIED!','GOT IT!','PASTE ME!','IT\'LL ROCK!'];

function onCopy(args)
{
	console.log(args)
	
	var randomTextNum = Math.floor(Math.random() * messages.length);
	$(".copied div").html(messages[randomTextNum]);
	$(".copied").css("background-color",args.text).show().find('div').addClass("animateIn");
	setTimeout('$(".copied div").removeClass("animateIn").addClass("animateOut");$(".copied").fadeOut(function(){$(".copied div").removeClass("animateOut")})', 700);
}

$(function(){
	//DOM READY
	
	//Popup
	$("#why").avgrund({          
	    width: 380, // max is 640px
	    height: 280, // max is 350px
	    showClose: true, // switch to 'true' for enabling close button 
	    showCloseText: 'Close', // type your text for close button
	    closeByEscape: true, // enables closing popup by 'Esc'..
	    closeByDocument: true, // ..and by clicking document itself
	    holderClass: 'popup-holder', // lets you name custom class for popin holder..
	    overlayClass: '', // ..and overlay block
	    enableStackAnimation: false, // enables different type of popin's animation
	    onBlurContainer: '', // enables blur filter for specified block
	    openOnEvent: true, // set to 'false' to init on load
	    setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
	    onLoad: function () {}, // set custom call before popin is inited..
	    onUnload: function () {}, // ..and after it was closed
	    template: '<p>This small web app helps you to copy the colors from <a target="_blank" href="http://designmodo.com/flat-free/">Flat UI</a>.<br/><br/>It\'s kind of responsive, so you can use it with a tiny browser like a widget. <br/><br/>I\'ll be providing more small apps like this, so if you are interested follow me <a target="_blank" href="https://twitter.com/ahmetsulek">@ahmetsulek</a>.<br/><br/>Feel free to tweet me any suggestions.</p>' // or function() { ... } 
	});
	
	//Side Menu
	$("#menu,#a-menu-close").click(function(){
		$("#fui-menu").toggleClass("cbp-spmenu-open");
	});
	
	//Initialize custom dropdown
	$("#format-dropdown").dropdown();
	
	//Bind the dropdown
	$(".cd-dropdown").on('click',function(){
		
	});
	
	$(document).on('click','.cd-dropdown li',function(){
		_gaq.push(['_trackEvent', 'ColorModePicked', $('input').val()]);
		refresh_format($('input').val());
	});
	
	$("#flatuipro").click(function(){
		_gaq.push(['_trackEvent', 'Flat UI Pro Clicked', '1']);
	});
	
	//OK ALIGN THE CONTENT
	window.align_content();
	
	//Copy function
	$(".color").each(function(){
		var $this = $(this);
		
		//assign colors
		var hex = rgb2hex($(this).css('background-color'));
		$this.attr('data-clipboard-text',hex);

		var temp_clip = new ZeroClipboard( document.getElementById($this.attr("id")), {
			moviePath: "js/ZeroClipboard/ZeroClipboard.swf"
		});
		temp_clip.on( 'complete', function(client, args) {
			_gaq.push(['_trackEvent', 'ColorPick', this.id]);
			window.onCopy(args);
		});
		
		clips.push(temp_clip);	
	});
	
	$(document).on("mouseover",".color",function(){
		$(".color").removeClass("zeroclipboard-is-hover");
		console.log(123);
	})

	//EOF DOM READY
});

function refresh_format(mode)
{
	if(mode == -1)
	{
		mode = 1;
	}
	
	if(mode == 1)
	{
		$(".color").each(function(){
			$(this).attr('data-clipboard-text',rgb2hex($(this).css('background-color')));
		});
	}
	else if(mode == 2)
	{
		$(".color").each(function(){
			$(this).attr('data-clipboard-text',rgb2hex($(this).css('background-color')).substring(1));
		});		
	}
	else if(mode == 3)
	{
		$(".color").each(function(){
			$(this).attr('data-clipboard-text',$(this).css('background-color'));
		});
	}
	else if(mode == 4)
	{
		$(".color").each(function(){
			var code = $(this).css('background-color');
			code = code.replace("rgb","rgba").substring(0, code.length);
			code += ",1.0)";
			$(this).attr('data-clipboard-text', code);
		});
	}
}

$(window).resize(function(){
    align_content();
});

//RESIZE FUNCTION
function align_content()
{
	var headerHeight = $("header").height();
	var marginTop = (headerHeight - 20) /2;
	
	$("#menu").width(headerHeight);
	$(".top-link,.facebook,.twitter").css("margin-top",marginTop);

	//Align content
	$("body").height($(window).height());
	
	if($(window).height() > 750)
		$(".copied div").css('margin-top',($(window).height()-180)/2-headerHeight/2);
	else
		$(".copied div").css('margin-top',($(window).height()-120)/2-headerHeight/2);
	
	$(".cd-dropdown").css('margin-top',(headerHeight-48)/2);
	
	//$(".color").css({width:$(window).width()/5,height:$(window).height()/4});
	for(var i=0;i++;i<clips.length)
	{
		clips[i].reposition();
	}
}

function alarma(text)
{
	alert(text);
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}