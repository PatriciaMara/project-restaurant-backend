import express from 'express'
import Food from "../models/food";
import foodsRepository from "../repositories/foods-repository";

const foodRouter = express.Router()

foodRouter.post('/food', (req, res) => {
    const food: Food = req.body
    foodsRepository.criar(food, (id) => {
        if (id) {
            res.status(201).location(`/food/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})

foodRouter.get('/food', (req, res) => {
    foodsRepository.lerTodos((foods) => res.json(foods))
})

foodRouter.get('/food/:id', (req, res) => {
    const id: number = +req.params.id
    foodsRepository.ler(id, (food) => {
        if (food) {
            res.json(food)
        } else {
            res.status(404).send()
        }
    })
})

foodRouter.put('/food/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})

foodRouter.delete('/food/:id', (req, res) => {
    const id: number = +req.params.id
    foodsRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})
export default foodRouter