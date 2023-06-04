document
	.getElementById('nutritionForm')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the form from submitting

		// Retrieve form values
		const name = document.getElementById('name').value;
		const weightValue = document.getElementById('weightValue').value;
		const caloriesValue = document.getElementById('caloriesValue').value;
		const selectValue = document.getElementById('selectValue').value;
		const fatValue = document.getElementById('fatValue').value;
		const saturatedfatValue =
			document.getElementById('saturatedfatValue').value;
		const carbohydratesValue =
			document.getElementById('carbohydratesValue').value;
		const sugarsValue = document.getElementById('sugarsValue').value;
		const proteinValue = document.getElementById('proteinValue').value;
		const fiberValue = document.getElementById('fiberValue').value;
		const saltValue = document.getElementById('saltValue').value;
		const cholesterolValue = document.getElementById('cholesterolValue').value;
		const sodiumValue = document.getElementById('sodiumValue').value;
		const potassiumValue = document.getElementById('potassiumValue').value;
		const barcodeValue = document.getElementById('barcodeValue').value;

		console.log('Form Values:', {
			name,
			caloriesValue,
			weightValue,
			selectValue,
			fatValue,
			saturatedfatValue,
			carbohydratesValue,
			sugarsValue,
			proteinValue,
			fiberValue,
			saltValue,
			cholesterolValue,
			sodiumValue,
			potassiumValue,
			barcodeValue,
		});
		// Reset the form
		this.reset();
		const title = document.getElementById('title');
		const calories = document.getElementById('calories');
		const fat = document.getElementById('fat');
		const saturatedFat = document.getElementById('saturatedFat');
		const cholesterol = document.getElementById('cholesterol');
		const sodium = document.getElementById('sodium');
		const carbohydrates = document.getElementById('Carbohydrates');
		const fiber = document.getElementById('fiber');
		const sugar = document.getElementById('sugar');
		const protein = document.getElementById('protein');
		const potassium = document.getElementById('potassium');

		title.textContent = `${name}`;
		calories.textContent = `${caloriesValue} kcal`;
		fat.textContent = `${fatValue} g`;
		saturatedFat.textContent = `${saturatedfatValue} g`;
		cholesterol.textContent = `${cholesterolValue} g`;
		sodium.textContent = `${sodiumValue} g`;
		carbohydrates.textContent = `${carbohydratesValue} g`;
		fiber.textContent = `${fiberValue} g`;
		sugar.textContent = `${sugarsValue} g`;
		protein.textContent = `${proteinValue} g`;
		potassium.textContent = `${potassiumValue} g`;
	});
let isFetchExecuted = false;

function fetchData() {
	if (!isFetchExecuted) {
		isFetchExecuted = true;
		// Make a GET request to retrieve data
		fetch('http://localhost:5000/nutrition', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log('Error:', error);
			});
	}
}
fetchData();
console.log(isFetchExecuted);

// Make a POST request to send data
// const dataToSend = {
// 	name: 'John Doe',
// 	age: 25,
// };

// fetch('https://api.example.com/data', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(dataToSend),
// })
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
