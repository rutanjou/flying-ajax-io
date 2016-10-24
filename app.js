(function(){
	console.log("hello world");
	$("#start").click(function(){
		console.log("lala");
		var url ="http://192.168.1.21:3000/places" ; 
		$.ajax(url).done(function(){
			$.get(url,function(response){
				console.log(response.places);
				for (var i = 0; i < response.places.length; i++) {
					response.places[i]
					$("#list").append("<li>"+response.places[i]+"</li>")
				}
			});


		});
		$.ajax(url).fail(function(){
			alert("fail");

		});
		$.ajax(url).always(function(){
			alert("always");

		});




	});
})();