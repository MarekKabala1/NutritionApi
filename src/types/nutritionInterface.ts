import { Document } from "mongoose"

export interface NutritionTypes extends Document {
	name: String,
	weight: {
		value: Number,
		unit: String,
		required: true
	},
	fat: {
		value: Number,
		unit: String,
		required: true
	},
	saturatedfat: {
		value: Number,
		unit: String,
		required: true
	},
	carbohydrates: {
		value: Number,
		unit: String,
		required: true
	},
	sugars: {
		value: Number,
		unit: String,
		required: true
	},
	fiber: {
		value: Number,
		unit: String,
	},
	protein: {
		value: Number,
		unit: String,
		required: true
	},
	salt: {
		value: Number,
		unit: String,
	},
	cholesterol: {
		value: Number,
		unit: String,
	},
	sodium: {
		value: Number,
		unit: String,
	},
	potassium: {
		value: Number,
		unit: String,
	},
	// id: Types.ObjectId;
}


