import express, { Request, Response } from "express"
import { Nutrition } from "../models/schema"


const getNutritions = async (req: Request, res: Response) => {
  try {
    const nutritions = await Nutrition.find()
    if (!nutritions || nutritions.length === 0) {
      return res.status(404).json({ err: 'No nutrition data found' });
    }
    res.status(200).json(nutritions);
  } catch (err) {
    res.status(500).json({ err: 'Database error: Could not fetch nutrition data' });
  }
}

const getNutrition = async (req: Request, res: Response) => {
  try {
    const name = req.params.name
    if (!name) {
      return res.status(400).json({ err: 'Name parameter is required' });
    }

    const escapedName = name.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regexPattern = escapedName.replace(/\s/g, '[-\\s]?');
    const regex = new RegExp(`^${regexPattern}$`, 'i');

    const nutrition = await Nutrition.findOne({ name: regex }).exec();
    if (!nutrition) {
      return res.status(404).json({ err: `Nutrition with name "${name}" not found` });
    }

    res.status(200).json(nutrition);
  } catch (err) {
    res.status(500).json({ err: 'Database error: Could not fetch nutrition data' });
  }
}

const postNutrition = async (req: Request, res: Response) => {
  const postNutritionItem = req.body
  const createNutritionItem = await Nutrition.create(postNutritionItem);
  return res.status(201).json(createNutritionItem);

}
const updateNutrition = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id
  const updatedNutritionItem = req.body
  const updateDB = await Nutrition.findByIdAndUpdate(id, updatedNutritionItem)
  return res.status(200).json(updateDB)
}

const deleteNutrition = async (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id
  if (req.params.id) {
    try {
      await Nutrition.findByIdAndDelete(id)
      return res.send(id)
    }
    catch (err) {
      res.status(500).json({ err: 'Product not found' });
    }
  }
}

export { deleteNutrition, updateNutrition, postNutrition, getNutritions, getNutrition }

