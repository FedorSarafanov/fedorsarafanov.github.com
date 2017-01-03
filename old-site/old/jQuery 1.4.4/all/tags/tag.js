$(document).ready(InitTags); 
var dict = $("<tags></tags>");
var lastStr = "";
var currentTags = null;
var tagList = {
	showed:false,
	n:0, //количество элементов
	marked:null,
	cursored:false,
	str:""
};


function InitTags()
{

	initFmap();

	// !! вставляем картинку логотипа
	$("#p-logo a").attr("style","background: url(wiki.png) no-repeat;");
	
	// !! исправляем ссылку на раздел ядро
	$("a[href='http://jquery.page2page.ru/index.php5/%D0%AF%D0%B4%D1%80%D0%BE']").attr("href", "Ядро.html");

	// !! текст с ссылками на актуальное содержимое
	var artName = window.location.href.split("/");//window.location.href
	artName = artName[artName.length-1].split(".")[0];
	$("#footer").html("Актуальную версию этого справочника вы всегда можете найти на официальном сайте <a href='http://jquery.page2page.ru'>jquery.page2page.ru</a>");
	$("#p-personal .pBody ul").html("<li><a href='http://jquery.page2page.ru/index.php5/"+artName+"'>Актуальная версия этой статьи (онлайн)</a></li> <li><a href='http://jquery.page2page.ru'>Источник &mdash; jquery.page2page.ru</a></li>");

	
	//--- инициализация не относящаяя к тегам (поиску по ключам). ---

	$(".functList .row").mouseover( OverFunctListRow ).mouseout( OutFunctListRow ).each(function(){
		var hr = $(this).find(".funct a")
		.css({"display":"block", "width":"100%", "height":"100%"})
		.attr("href");
		$(this).find(".discr").wrapInner("<a href='"+hr+"'></a>").find("a").css({"display":"block", "width":"100%", "height":"100%"});
	});

	// добавляем текст к всплывающим подсказкам над возвращяемыми значениями и требуемой версией jQ
	var objct = $(".titleOfArt a");
	var titl = "";
	if(objct.size() != 0)
	{
		titl =  objct.attr("title").toLowerCase();
		objct.attr("title", "Возвращяет "+titl);
	}
	objct = $(".tit .wrap a");
	if(objct.size() != 0)
	{
		objct.each(function(){
			titl =  $(this).attr("title").toLowerCase();
			$(this).attr("title", "Возвращяет "+titl);
		});
	}
	objct = $(".tit .nVers, .titleOfArt .nVers");
	if(objct.size() != 0)
	{
		objct.each(function(){
			titl =  "Актуально, начиная с jQuery-"+$(this).text();
			$(this).attr("title", titl);
			$(this).text("v:"+$(this).text());
		});
	}

	advCodeInit();
}

var srstx = ""; // хранит текст в текстареа для сравнения
function advCodeInit()
{
	$("pre.rendAdvCode").each(function(){
		var prsId = Math.floor(Math.random()*10000);
		var o = $(this);
		var dats = o.attr("class").split(" ")[1].split("_");
		if(dats[1] == "1")// если необходимо оживить джскрпт
		{
			var o2 = $("<textarea class='rendAdvCode adv"+prsId+"'></textarea>")
			.insertAfter(o)
			.height(o.height()+17);
			var tx = "<a href='javascript:toggleAdvCode("+prsId+")' class='opncls'>Скрыть исходный код</a> &nbsp; <a href='javascript:svCode("+prsId+")' class='notSavedChng'>Применить изменения</a>";
			o2.before("<div class='overCode ovr"+prsId+"'>"+tx+"</div>")
			.after("<div class='undCode und"+prsId+"'>"+tx+"</div>")
			.data("state", "open");

            srstx = o.text();
			o2.text(o.text()).next()
			.after(
				'<span>Результат:</span>'+
			  	'<div class="browsWind brs'+prsId+'" style="width:'+dats[4]+'; height:'+dats[3]+';">'+
			  		'<iframe src="tmplIfr.html" frameborder="no" name="ifr'+prsId+'" width="100%" height="100%"></iframe>'+
					'<div class="t-r-bord"> </div>'+
					'<div class="t-l-bord"> </div>'+
					'<div class="l-bord"> </div>'+
					'<div class="r-bord"> </div>'+
					'<div class="b-r-bord"> </div>'+
					'<div class="b-l-bord"> </div>'+
				'</div>'			
			).end().keydown(txChanged);

			if(dats[2] == "1")// если сам код нужно оставить закрытым
				toggleAdvCode(prsId, true);
			o.remove();

			$("iframe[name='ifr"+prsId+"']").one("load", function(){
				svCode(prsId);
			});
		}
	});
}

function toggleAdvCode(prsId, isFirst)
{
	var jqWnd = $(".adv"+prsId);
	var time = 0;
	if(isFirst == undefined || isFirst == false)
		time = 700;

	if(jqWnd.data("state") == "open")
		jqWnd.next()
			.addClass("invis").next().addClass("invis")
		.end().end().prev().find("a:first")
			.text("Показать исходный код")
		.end().end()
			.slideUp(time).data("state", "close");
	else if(jqWnd.data("state") == "close")
		jqWnd.prev().find("a:first")
			.text("Скрыть исходный код")
		.end().end()
			.slideDown(time).data("state", "open")
		.next()
			.removeClass("invis").next().removeClass("invis");
}
function svCode(prsId)
{
	var ovr = $(".ovr"+prsId+" a:last");
	if(ovr.attr("class") == "notSavedChng")
	{
		var timeout = 0;
		if($.browser.msie)
			timeout = 2000;
		// разделение кода на две части нужно для того, чтобы в ие успела подгружаться jq
		var code = $(".adv"+prsId).val().split("<body>");
		getFrame('ifr'+prsId).document.write(code[0]);
		setTimeout(function(){
			getFrame('ifr'+prsId).document.write("<body>"+code[1]);
			getFrame('ifr'+prsId).document.close();
		},timeout);

		
		ovr.attr("class","savedChng");
		$(".und"+prsId+" a:last").attr("class", "savedChng");
	}
}
function txChanged()
{
	var o = $(this);
	setTimeout(function(){
		if(srstx != o.val())
		{
		    srstx = o.val();
			var prsId = o.attr("class").split(" ")[1].substring(3);
			var ovr = $(".ovr"+prsId+" a:last");
			if(ovr.attr("class") == "savedChng")
			{
				ovr.attr("class", "notSavedChng");
				$(".und"+prsId+" a:last").attr("class", "notSavedChng");
			}
		}
	}, 30)
}

var frmCash = {};
function getFrame(fName)
{
	if(frmCash[fName] != undefined)
		return frmCash[fName];
	for(var i=0; i<frames.length; i++)
		frmCash[frames[i].name] = frames[i];
	return frmCash[fName];
}

//------------------------------------------
function HandleSearchQuery(event)
{
	var f = function()
	{
		var subTag = $("#findFild").attr("value");
		var various = false;
		if(lastStr != subTag)
			various = true;
		lastStr = subTag;
		
		if(subTag.length >= 3 && various)
			SearchStringChanged();
		if(subTag.length < 3)
			HideTags();
	};

	switch(event.keyCode)
	{
		case 40:{
			if(tagList.showed)
			{
				switch(tagList.marked)
				{
					case null:;
					case tagList.n-1: MarkedTag(0);break;
					default: MarkedTag(tagList.marked+1);
				}
			}
		}break;
		case 38:{
			if(tagList.showed)
			{
				switch(tagList.marked)
				{
					case null: MarkedTag(tagList.n-1);break;
					case 0: MarkedTag(null);break;
					default: MarkedTag(tagList.marked-1);
				}
			}
		}break;
		case 39:;
		case 37:;
		case 16:;
		case 18:;break;
		case 13:{
			if(tagList.showed && tagList.marked != null)
				window.location.href = "../index.php5/"+currentTags[tagList.marked].attr("title");
		}break;
		default:setTimeout(f, 700);
	}
}

function SearchStringChanged()
{
	var subTag = $("#findFild").attr("value");
	
	var node = MostAppropriateNode(subTag);
	if(node == null)
	{
		RequestTags(subTag);
		return;
	}

	var tags = SearchTagsInNode(subTag, node);

	if(tags.length == 10)
	{
		ShowTags(tags);
		return;
	}
	else
	{
		if(node.attr("stat") == "full")
			if(tags.length == 0)
				HideTags();
			else
				ShowTags(tags);
		else
			RequestTags(subTag);
	}
}

function ShowTags(tags)
{
	HideTags();
	var text = "<table id=tagList border=0px cellspacing=0 cellpadding=0 onMouseOver='javascript:tagList.cursored=true' onMouseOut='javascript:tagList.cursored=false'>";
	for(var i=0; i<tags.length; i++)
		text = text+"<tr id='t"+i+"' class='tagItem' onClick='javascript:TagClicked(this)' onMouseOver='javascript:OverTag(this)' onMouseOut='javascript:OutTag(this)'><td width=150px><div class='tagName'>"+tags[i].attr("tag")+"</div></td><td><div class='ttype'>"+tags[i].attr("type")+"</div></td><td><div class='ttitle' title='"+tags[i].attr("title")+"'>"+tags[i].attr("alias")+"</div></td></tr>";
	text = text+"</table>";
	$("#tagSearch").append(text);
	
	currentTags = tags;
	tagList.n = tags.length;
	tagList.showed = true;
	tagList.marked = null;
	tagList.str = $("#findFild").attr("value");
}
function HideTags()
{
	$("#tagList").remove();
	tagList.n = 0;
	tagList.showed = false;
	tagList.marked = null;
	tagList.str = "";
}
//-----------------------------------------
function SearchTagsInNode(s, node)
{
	var allTags = node.children("t");
	var tags = [];
	var tagName="";
	for(var i=0; i<allTags.length && tags.length<10; i++)
	{
		tagName = allTags.eq(i).attr("tag");
		if(tagName.substring(0, s.length) == s)
			tags[tags.length] = allTags.eq(i);
	}
	return tags;
} 

//-----------------------------------------
function MarkedTag(num)
{
	$("#t"+tagList.marked).attr("class", "tagItem");;
	$("#t"+num).attr("class", "markedTagItem");
	if(num != null)
		$("#findFild").attr("value", currentTags[num].attr("tag"));
	else
		$("#findFild").attr("value", tagList.str);
	tagList.marked = num;
}
function OverTag(el)
{
	$(el).find(".ttitle").attr("class", "huveredTtitle");
}
function OutTag(el)
{
	$(el).find(".huveredTtitle").attr("class", "ttitle");
}
function TagClicked(el)
{
	var title = $(el).find(".huveredTtitle").attr("title");
	window.location.href = "../index.php5/"+title;
}
//-----------------------------------------
function RequestTags(s)
{
	$.post("../tags/index.php", {subTags:s}, function(data){ReceiveTagsFromServer(data)});
}
function ReceiveTagsFromServer(xmlTags)
{
	if(xmlTags != "")
		AddNode(xmlTags);
	
	//Измененный словарь должен быть повторно обработан
	SearchStringChanged();
}

//----------------------------------------
function MostAppropriateNode(s)
{
	rootNodes = dict.children("q");

	var res = null;
	for(var i=0; i<rootNodes.length; i++)
	{
		res = FindInNode(rootNodes.eq(i), s);
		if(res.stat != "no")
			return res.obj;
	}
	return null;
}
function FindInNode(node, s)
{
	var tname = node.attr("id");

	if(tname.length == s.length)
		if(tname == s)
			return {obj:node, stat:"equal"};
		else
			return {obj:null, stat:"no"};

	if(tname.length < s.length && tname == s.substring(0, tname.length))
	{	
		var chld = node.children("q");
		var res = null;
		for(var i=0; i<chld.length; i++)
		{
			res = FindInNode(chld.eq(i), s);
			if(res.stat != "no")
				return res;
		}
		
		return {obj:node, stat:"path"};
	}

	return {obj:null, stat:"no"};
}

//вставляет ХМЛ в справочник (автоматически находит нужного родителя)
function AddNode(xmlText)
{
	var nodeRoot = $(xmlText).attr("id");
	var place = MostAppropriateNode(nodeRoot);
	
	if(place == null)
		dict.append(xmlText);
	else
		place.append(xmlText);
}


//Функции работы со списками функций
function OverFunctListRow()
{
	$(this).attr("class","hooverRow");
}
function OutFunctListRow()
{
	$(this).attr("class","row");
}

// работа с картой функций
function initFmap()
{
	$("body").prepend('<div id="mappo" style="position:fixed; display:none; top:0; left:0; width:100%; height:100%; z-index:10;">'+
	'<div style="position:absolute; top:5px; right:5px; width:16px; height:16px; padding:3px; background-color:#d3abab; font:bold 20pt Arial,sans-serif; cursor:pointer;" onClick="javascript:hideFmap();">'+
	'<span style="position:relative; top:-8px; left:1px;">&#215;</span></div>'+
	'<iframe src="" name="inmappo" frameborder="no" width="100%" height="100%" id="inmappo"></iframe></div>');
	
	$(".generated-sidebar:first").prepend('<a href="javascript:openFmap();" style="display:block; margin:0 0 2px 15px; padding:6px 0 0 13px; width:102px; height:27px; background:url(\'rfbutt.png\'); color:#665344;">Карта функций</a>');
}

function openFmap()
{
	if($("#inmappo").attr("src") == "")
	    inmappo.location.href = "ifr.html";
	    
	$("#mappo")
	.fadeTo(500, 1);
}

function hideFmap()
{
	$("#mappo").css("display","none");
}