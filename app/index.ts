import express, { Application } from 'express';
import * as path from "path"
import Router from 'router/Router';
import dotenv from "dotenv"

// Carrega as configurações do env
dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || "8080"
app.use(express.static(path.join(__dirname, './public')));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// Carrega as rotas do painel
Router(app)

app.listen(port, () => {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
});