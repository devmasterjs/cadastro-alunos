import express from 'express';
import { resolve } from 'path';
import './src/database';
import homeRoutes from './src/routes/homeRouter';
import jwtTokenRoutes from './src/routes/jwtTokenRouter';
import photoRoutes from './src/routes/photoRouter';
import studentRoutes from './src/routes/studentRouter';
import userRoutes from './src/routes/userRouter';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // utilizado para manipular conteudos em requições POST
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/login', jwtTokenRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/students', studentRoutes);
    this.app.use('/photo', photoRoutes);
  }
}

export default new App().app;
