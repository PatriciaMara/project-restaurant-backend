"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const foodsRepository = {
    criar: (food, callback) => {
        const sql = 'INSERT INTO foods (name, description, value, category, amountpeople, isavailable) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [food.name, food.description, food.value, food.category, food.amountpeople, food.isavailable];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    lerTodos: (callback) => {
        const sql = 'SELECT * FROM food';
        const params = [];
        database_1.default.all(sql, params, (_err, rows) => callback(rows));
    },
    ler: (id, callback) => {
        const sql = 'SELECT * FROM food WHERE id = ?';
        const params = [id];
        database_1.default.get(sql, params, (_err, row) => callback(row));
    },
    apagar: (id, callback) => {
        const sql = 'DELETE FROM food WHERE id = ?';
        const params = [id];
        database_1.default.run(sql, params, function (_err) {
            callback(this.changes === 0);
        });
    },
};
exports.default = foodsRepository;
