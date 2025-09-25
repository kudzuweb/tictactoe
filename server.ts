import express from 'express';
import ViteExpress from 'vite-express';
import { makeMove } from './src/gameEngine.ts';

const getAll =() => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data).catch(error => console.log('fail'))
}

const app = express();
app.use(express.json());

app.get('/message', (_, res) => res.send("Hello from express!"));

app.get('/api/games/:id', (req, res) => res.json(loadGame(req.params.id)))

app.post('api/games/:id/moves', (req, res) => res.json(applyAndsave(req.body.index)))

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."))