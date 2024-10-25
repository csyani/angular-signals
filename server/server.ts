import express from 'express';
import { Application } from 'express';
import { getAllHeroes, getHeroById } from './get-heroes.route';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.route('/api/heroes').get(getAllHeroes);
app.route('/api/heroes/:id').get(getHeroById);

const httpServer = app.listen(9000, () => {
  console.log(
    'HTTP REST API 服务器运行在 http://localhost:' +
      (httpServer.address() as any)?.port
  );
});
