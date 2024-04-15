async function fetchData() {
const url = 'https://map-geocoding.p.rapidapi.com/json?latlng=40.714224%2C-73.961452';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '593e779668msh4b04a350e091841p1e0dc5jsnb616f24d3635',
		'X-RapidAPI-Host': 'map-geocoding.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();