/ jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
<script>
	window.onload = function () {
	  var img = new Image();
	  img.src = "media/imageISUD.webp";
 
	  img.onload = function () {
		  // CREATE image CONTEXT.
		  var canvas = document.getElementById("SRC");
		  var ctx = canvas.getContext('2d');
		  canvas.width = img.width;
		  canvas.height = img.height;
 
		  ctx.drawImage(img, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.
	   }
	}
</script>