import express, { Request, Response } from "express"
import { Nutrition } from "../models/schema"


const getNutritions = async (req: Request, res: Response) => {
  try {
    const nutritions = await Nutrition.find()
    res.status(200).json(nutritions);
  } catch (err) {
    res.status(500).json({ err: 'Something went wrong could not fetch data' });
  }
}
const getNutrition = async (req: Request, res: Response) => {
  try {
    const name = req.params.name
    const nutritions = await Nutrition.findOne({ name: name }).exec();
    res.status(200).json(nutritions);
  } catch (err) {
    res.status(500).json({ err: 'Something went wrong could not fetch data' });
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

