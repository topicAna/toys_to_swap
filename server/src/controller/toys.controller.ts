import express, { Router, Request, Response, Application } from 'express';
import { ToyService } from '../services/toy.service';
import { Toy } from '../models/toy';


/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ToyController = (app: Application) => {

    const router: Router = express.Router();
    const toyService = ToyService.getInstance();

    /**
     * Return only one post in JSON relative to its id
     */

 
    router.get('/', (req: Request, res: Response) => {
        toyService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        toyService.getById(id).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });

      router.post('/', (req: Request, res: Response) => {
        const toy: Toy = req.body; // Automatically transform in a Post object
  
        toyService.create(toy).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });


    app.use('/toy', router);
};
