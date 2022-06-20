"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const food_router_1 = __importDefault(require("./routers/food-router"));
// Porta do servidor
const PORT = process.env.PORT || 4000;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = (0, express_1.default)();
// JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
// Cors
app.use((0, cors_1.default)({
    origin: ['http://localhost:4000']
}));
// Rotas
app.use('/api', food_router_1.default);
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404);
});
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
