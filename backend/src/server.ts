import 'reflect-metadata'; // typeorm's requirement

import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { loadRoutes } from './infrastructure/rest/routes';

export const app = express();

const httpServer = createServer(app);

function initServer() {
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  app.use(express.json());


  app.use(cors());

  loadRoutes(app);

  const PORT = process.env.PORT || 3001;

  httpServer.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}

initServer();
