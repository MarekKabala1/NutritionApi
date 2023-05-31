document
	.getElementById('nutritionForm')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the form from submitting

		// Retrieve form values
		const name = document.getElementById('name').value;
		const weightValue = document.getElementById('weightValue').value;
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
	});
