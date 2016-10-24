	console.log("hello world");
	$("#start").click(function(){
		console.log("lala");
		var url ="http://192.168.1.21:3000/places" ; 
		$.ajax(url).done(function(){
			$.get(url,function(response){
				console.log(response.places);
				for (var i = 0; i < response.places.length; i++) {
					var place = response.places[i];
					$("#list").append("<li>"+ place.nom +"</li>")
					if (place.nom === 'IoT Valley'){
						var MotDePasse = place.password;
						$('#mdp').html('Mot de passe IoT Valley: ' + MotDePasse);
					}
				}
			});
		});
		$.ajax(url).fail(function(){
			console.log("fail");
		});
		$.ajax(url).always(function(){
			console.log("always");
		});
	});

	$('#meteo').click(function(){
		console.log('meteo ok');
		var url = "http://openweathermap.org/";
		$.ajax(url).done(function(){
			$.get(url, function(response){
				console.log(response.);
			});
		});
	});