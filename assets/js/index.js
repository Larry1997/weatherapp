const key = 'bc4b35f35785921d70ef3cb2f87a3976';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { 

		console.log(resp);
	return resp.json() }) /*This is just an HTTP response, not the actual JSON. 
	To extract the JSON body content from the response, we use the json() method (defined on the Body mixin,
	 which is implemented by both the Request and Response objects.) */
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 1277333 );
}
