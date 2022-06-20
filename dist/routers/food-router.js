"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foods_repository_1 = __importDefault(require("../repositories/foods-repository"));
const foodRouter = express_1.default.Router();
foodRouter.post('/food', (req, res) => {
    const food = req.body;
    foods_repository_1.default.criar(food, (id) => {
        if (id) {
            res.status(201).location(`/food/${id}`).send();
        }
        else {
            res.status(400).send();
        }
    });
});
foodRouter.get('/food', (req, res) => {
    foods_repository_1.default.lerTodos((foods) => res.json(foods));
});
foodRouter.get('/food/:id', (req, res) => {
    const id = +req.params.id;
    foods_repository_1.default.ler(id, (food) => {
        if (food) {
            res.json(food);
        }
        else {
            res.status(404).send();
        }
    });
});
foodRouter.put('/food/:id', (req, res) => {
    const id = +req.params.id;
    res.status(204).send();
});
foodRouter.delete('/food/:id', (req, res) => {
    const id = +req.params.id;
    foods_repository_1.default.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send();
        }
        else {
            res.status(204).send();
        }
    });
});
exports.default = foodRouter;
