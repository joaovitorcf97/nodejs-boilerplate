import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public start(): void {
    this.app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on port ${env.PORT}`);
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(cors({ origin: '*' }));
    this.app.use(helmet({ contentSecurityPolicy: false }));
  }

  private routes(): void {
    // Define your routes here.
  }
}

export default App;
