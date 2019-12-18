
  import bodyParser from 'body-parser';
  import cors from 'cors';
  import { Application } from 'express';

  export default async ( app: Application) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // ...More middlewares

    // Return the express app
    return app;
  };
