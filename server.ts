import express from 'express';
import ViteExpress from 'vite-express';
import { makeMove } from './src/game.ts';


const getAll =() => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data).catch(error => console.log('fail'))
}

const app = express();
app.use(express.json());

app.get('/message', (_, res) => res.send("Hello from express!"));

app.get('/game', (req, res) => res.send(gameState))

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))