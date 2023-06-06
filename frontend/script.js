document
	.getElementById('nutritionForm')
	.addEventListener('submit', function (event) {
		event.preventDefault();

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
		const carbohydrates = document.getElementById('carbohydrates');
		const fiber = document.getElementById('fiber');
		const sugar = document.getElementById('sugar');
		const protein = document.getElementById('protein');
		const potassium = document.getElementById('potassium');
		const nutritionSizeValue = document.querySelector('#nutrition-size-value');

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
		nutritionSizeValue.textContent = selectValue;
	});

const productForm = document.getElementById('productForm');
productForm.addEventListener('submit', async function (event) {
	const productName = document.getElementById('search').value;
	event.preventDefault();
	console.log(productName);

	try {
		const response = await fetch(
			`http://localhost:5000/nutrition/findOne/${productName}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.ok) {
			const data = await response.json();
			console.table(data);
			title.textContent = `${data.name.value}`;
			calories.textContent = `${data.energy.value} kcal`;
			fat.textContent = `${data.fat.value} g`;
			saturatedFat.textContent = `${data.saturatedfat.value} g`;
			cholesterol.textContent = `${data.cholesterol.value} g`;
			sodium.textContent = `${data.sodium.value} g`;
			carbohydrates.textContent = `${data.carbohydrates.value}g`;
			fiber.textContent = `${data.fiber.value} g`;
			sugar.textContent = `${data.sugars.value} g`;
			protein.textContent = `${data.protein.value} g`;
			potassium.textContent = `${data.potassium.value} g`;
			nutritionSizeValue.textContent = data.weight.unit;
		} else {
			console.log('Error:', response.status);
		}
	} catch (error) {
		console.log('Error:', error);
	}
	this.reset();
});
