const titleL = document.getElementById('title');
const caloriesL = document.getElementById('calories');
const fatL = document.getElementById('fat');
const saturatedFatL = document.getElementById('saturatedFat');
const cholesterolL = document.getElementById('cholesterol');
const sodiumL = document.getElementById('sodium');
const carbohydratesL = document.getElementById('carbohydrates');
const fiberL = document.getElementById('fiber');
const sugarL = document.getElementById('sugar');
const proteinL = document.getElementById('protein');
const potassiumL = document.getElementById('potassium');
const saltL = document.getElementById('salt');
const nutritionSizeValueL = document.querySelector('#nutrition-size-value');

const nutritionForm = document
	.getElementById('nutritionForm')
	.addEventListener('submit', async function (event) {
		event.preventDefault();

		// Retrieve form values
		/**
		 * @type {string}
		 */
		const name = document.getElementById('name').value;
		/**
		 * @type {number}
		 */
		const weight = document.getElementById('weightValue').value;
		/**
		 * @type {number}
		 */
		const energy = document.getElementById('caloriesValue').value;
		/**
		 * @type {string}
		 */
		const select = document.getElementById('selectValue').value;
		/**
		 * @type {number}
		 */
		const fat = document.getElementById('fatValue').value;
		/**
		 * @type {number}
		 */
		const saturatedfat = document.getElementById('saturatedfatValue').value;
		/**
		 * @type {number}
		 */
		const carbohydrates = document.getElementById('carbohydratesValue').value;
		/**
		 * @type {number}
		 */
		const sugars = document.getElementById('sugarsValue').value;
		/**
		 * @type {number}
		 */
		const protein = document.getElementById('proteinValue').value;
		/**
		 * @type {number}
		 */
		const fiber = document.getElementById('fiberValue').value;
		/**
		 * @type {number}
		 */
		const salt = document.getElementById('saltValue').value;
		/**
		 * @type {number}
		 */
		const cholesterol = document.getElementById('cholesterolValue').value;
		/**
		 * @type {number}
		 */
		const sodium = document.getElementById('sodiumValue').value;
		/**
		 * @type {number}
		 */
		const potassium = document.getElementById('potassiumValue').value;
		/**
		 * @type {number}
		 */
		const barcode = document.getElementById('barcodeValue').value;

		console.log('Form Values:', {
			name,
			energy,
			weight,
			select,
			fat,
			saturatedfat,
			carbohydrates,
			sugars,
			protein,
			fiber,
			salt,
			cholesterol,
			sodium,
			potassium,
			barcode,
		});
		// Reset the form
		this.reset();

		//Output sended data to Nutrition Facts Label

		titleL.textContent = `${name}`;
		caloriesL.textContent = `${energy} kcal`;
		fatL.textContent = `${fat} g`;
		saturatedFatL.textContent = `${saturatedfat} g`;
		cholesterolL.textContent = `${cholesterol ?? 0} g`;
		sodiumL.textContent = `${sodium ?? 0} g`;
		carbohydratesL.textContent = `${carbohydrates} g`;
		fiberL.textContent = `${fiber ?? 0} g`;
		sugarL.textContent = `${sugars ?? 0} g`;
		saltL.textContent = `${salt ?? 0} g`;
		proteinL.textContent = `${protein} g`;
		potassiumL.textContent = `${potassium ?? 0} g`;
		nutritionSizeValueL.textContent = `Nutrition Values per 100 ${select}`;

		//Send data to the server
		//To DO make this one to one function with output data to label
		try {
			const response = await fetch('http://localhost:5000/nutrition', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name.toLowerCase(),
					energy: { value: energy, unit: 'kcal' },
					weight: { value: weight, unit: select },
					fat: { value: fat, unit: 'g' },
					saturatedfat: { value: saturatedfat, unit: 'g' },
					carbohydrates: { value: carbohydrates ?? 0, unit: 'g' },
					sugars: { value: sugars ?? 0, unit: 'g' },
					protein: { value: protein, unit: 'g' },
					fiber: { value: fiber ?? 0, unit: 'g' },
					salt: { value: salt ?? 0, unit: 'g' },
					cholesterol: { value: cholesterol ?? 0, unit: 'g' },
					sodium: { value: sodium ?? 0, unit: 'g' },
					potassium: { value: potassium ?? 0, unit: 'g' },
				}),
			});
			if (response.ok) {
				const data = await response.json();
				console.table(data);
			} else {
				console.error('Error:', response.status);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	});
//Read one product from DB.
document
	.getElementById('productForm')
	.addEventListener('submit', async function (event) {
		const productName = document.getElementById('search').value.toLowerCase();
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
				titleL.textContent = `${data.name}`;
				caloriesL.textContent = `${data.energy.value} kcal`;
				fatL.textContent = `${data.fat.value} g`;
				saturatedFatL.textContent = `${data.saturatedfat.value} g`;
				cholesterolL.textContent = `${data.cholesterol.value} g`;
				sodiumL.textContent = `${data.sodium.value} g`;
				carbohydratesL.textContent = `${data.carbohydrates.value}g`;
				fiberL.textContent = `${data.fiber.value} g`;
				sugarL.textContent = `${data.sugars.value} g`;
				saltL.textContent = `${data.salt.value} g`;
				proteinL.textContent = `${data.protein.value} g`;
				potassiumL.textContent = `${data.potassium.value} g`;
				nutritionSizeValueL.textContent = `Nutrition Values per 100 ${data.weight.unit}`;
			} else {
				console.error('Error:', response.status.json);
			}
		} catch (error) {
			console.error('Error:', error);
		}
		this.reset();
	});
