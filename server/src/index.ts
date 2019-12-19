import { TeamsController } from './controller/team.controller';
import express from 'express';

import loaders from './loaders';
import { PostsController } from './controller/posts.controller';
import { EventsController } from './controller/events.controller';
import { ToyController } from './controller/toys.controller';
import { CharityController } from './controller/charity.controller';
import { UserController } from './controller/user.controller';


async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    PostsController(app);
    EventsController(app);
    UserController(app);

    TeamsController(app);
    CharityController(app);
    ToyController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();
