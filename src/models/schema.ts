import mongoose, { Model } from "mongoose";
import { NutritionTypes } from "../types/nutritionInterface";
const { Schema } = mongoose;

const nutritionSchema = new Schema<NutritionTypes, Model<NutritionTypes>>({
  name: {
    type: String,
    required: Boolean
  },
  weight: {
    value: Number,
    unit: String,
    required: Boolean
  },
  fat: {
    value: Number,
    unit: String,
    required: Boolean
  },
  saturatedfat: {
    value: Number,
    unit: String,
    required: Boolean
  },
  carbohydrates: {
    value: Number,
    unit: String,
    required: Boolean
  },
  sugars: {
    value: Number,
    unit: String,
    required: Boolean
  },
  fiber: {
    value: Number,
    unit: String,
  },
  protein: {
    value: Number,
    unit: String,
    required: Boolean
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
})

const Nutrition = mongoose.model<NutritionTypes>('Nutrition', nutritionSchema)
export { Nutrition }