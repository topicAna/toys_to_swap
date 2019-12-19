import { Event } from './../models/event';
import { EventService } from './../services/events.service';
import express, { Router, Request, Response, Application } from 'express';
import { Participate } from '../models/participate';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const EventsController = (app: Application) => {

    const router: Router = express.Router();
    const eventsService = EventService.getInstance();

    /**
     * Return all posts in JSON
     */

    router.get('/participate/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      eventsService.getParticipateByUser(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.get('/', (req: Request, res: Response) => {
      eventsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      eventsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.post('/participate', (req: Request, res: Response) => {
      const participate: Participate = req.body; // Automatically transform in a Post object

      eventsService.createByUser(participate).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new post from a JSON body and return the created post in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const event: Event = req.body; // Automatically transform in a Post object

      eventsService.create(event).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Update a post relative to its id and return the updated post in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const event: Event = req.body; // req.params.id is automatically set into the body

      eventsService.update(event).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Delete a post relative its id.
     */

    router.delete('/participate/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      eventsService.deleteEventByUser(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.delete('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      eventsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/events', router);
};
