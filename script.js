//your JS code here. If required.
let btn = document.getElementById("btn");
const API_KEY = "ed4d31dd300b25a056d846b625caf1b0";
btn.addEventListener('click',()=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`)
	.then((res)=>res.json())
	.then(data => {
		let weatherD = document.getElementById("weatherData");
		weatherD.innerHTML = `Current weather in London: ${data.weather[0].description}`;
	})
	.catch((error)=>console.log(error));
})

