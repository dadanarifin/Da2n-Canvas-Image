// Converts image to canvas; returns new canvas element
	function ImageToCanvas(image) {
		var canvas = document.createElement("canvas");
		canvas.width = image.width;
		canvas.height = image.height;
		canvas.getContext("2d").drawImage(image, 0, 0);
		return canvas;
	}

	// Converts canvas to an image
	function CanvasToImage(canvas) {
		var image = new Image();
		image.src = canvas.toDataURL("image/png");
		return image;
	}
	
	// Get Canvas Src
	function getUrlCanvas(canvas){
		var url  = CanvasToImage(canvas);
		return url['src'];
	}
	
	// Set Wookmark Text
	function SetWookmark(canvas, text, size){
		canvas.getContext("2d").font = size + "px Arial";
		canvas.getContext("2d").fillText(text,10,50);
		return canvas;
	}	
	
	// Set Wookmark Image
	function SetWookmarkImg(canvas, image){
		canvas.getContext("2d").drawImage(image,10,50);
		return canvas;
	}
