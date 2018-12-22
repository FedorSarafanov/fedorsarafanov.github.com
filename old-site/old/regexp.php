<style>
	.crop{
	  float:left;
	  display: block;
	  overflow:hidden; /* this is important */

	}

	.crop img{
	/*width: 450px;*/
  	margin:0px 0px -37px 0px;
 	}
 	.line{
 		display: block;
 		float: left;
 		width: 1440px;
 	}
</style>

 <script>
 	ox=6
 	oy=6
	x0=43.804490
	y0=56.373192
	dx=0.0825
	dy=0.039816	
	for (j=1;j<=oy;j++) {
		for (i=1;i<=ox;i++) {
			x=x0+dx*i;
			y=y0-dy*j;	
			$('article').append('<div  class="crop no'+j+'"><img src="http://static-maps.yandex.ru/1.x/?ll='+x+'%2C'+y+'&l=map,trf&z=13&size=480,450" alt="" /></div>')
		};
	$('article .no'+j).wrapAll('<div class="line"></div>');
	};
	$('.line').width(ox*450+180+'px');
 </script>