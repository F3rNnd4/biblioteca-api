import express from "express";
import { config } from "dotenv";

config();
const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.json({
        message: "✨ Bem-vindo à API da Biblioteca! 📚",
        status: "online"
    });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).json({
        message: "🔍 Oops! Rota não encontrada 🤔"
    });
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`\n📡 Servidor iniciado com sucesso!`);
    console.log(`🚀 API rodando em: http://localhost:${port}`);
    console.log(`📚 Biblioteca API está pronta para receber requisições! 🎉\n`);
});