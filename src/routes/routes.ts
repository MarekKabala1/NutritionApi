import express from "express"
import { getNutrition, getNutritions, postNutrition, updateNutrition, deleteNutrition } from '../controllers/controllers'


const router = express.Router();


router.get(`/findOne/:name`, getNutrition)
router.get('/', getNutritions)
router.post('/', postNutrition)
router.put('/:id', updateNutrition)
router.delete('/:id', deleteNutrition)

export const routes = router