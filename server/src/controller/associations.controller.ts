
import express, { Router, Request, Response, Application } from 'express';
import { AssociationsService } from '../services/associations.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const AssociationsController = (app: Application) => {

    const router: Router = express.Router();
    const associationsService = AssociationsService.getInstance();

    /**
     * Return all posts in JSON
     */
    router.get('/', (req: Request, res: Response) => {
        associationsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Return all posts in JSON
     */
    router.get('/name', (req: Request, res: Response) => {
        associationsService.getAllByName().then(results => {
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
        associationsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    });

    /**
     * Delete a post relative its id.
     */
    router.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        associationsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
            console.log(err);
        })
    });

    app.use('/associations', router);
};
