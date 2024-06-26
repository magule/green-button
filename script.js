const cities = [
	"nyc",
	"la",
	"dc",

];


const button = document.getElementById('cityButton');
const cityDisplay = document.getElementById('cityDisplay');

let currentIndex = 0;

button.addEventListener('click', function() {
	cityDisplay.textContent = cities[currentIndex];

	currentIndex++;


	if (currentIndex >= cities.length) {
		currentIndex = 0;
	}
});

	


