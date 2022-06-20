"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const DBSOURCE = 'db.sqlite';
const SQL_ITENS_CREATE = `
    CREATE Table foods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    value REAL,
    category TEXT,
    amountpeople INTEGER,
    isavailable INTEGER
    )`;
const SQL_FOODS_DELETE = `DROP TABLE foods`;
const database = new sqlite3_1.default.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    else {
        console.log('Base de dados conectada com sucesso.');
        database.run(SQL_ITENS_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            }
            else {
                console.log('Tabela itens criada com sucesso.');
            }
        });
    }
});
exports.default = database;
