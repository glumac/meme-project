$('.meme-form').submit(function(event){

	event.preventDefault();

	var input = $('.meme-input').val()
	
	console.log(input);

	// javascript, jQuery
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q='" + input + "'&api_key=dc6zaTOxFJmzC&limit=5");
	xhr.done(function(data) { 
		console.log("success got data", data); 

		data.data.forEach(function(gif){
			$('.meme-list').append('<li><video src='+ gif.images.looping.mp4 + ' type="video/mp4" autoplay></video></li>')

		})
	});
})