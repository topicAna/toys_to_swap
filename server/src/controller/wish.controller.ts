import express, { Router, Request, Response, Application } from 'express';
import { WishService } from '../services/wish.service';
import { Wish } from '../models/wish';


/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const WishController = (app: Application) => {

    const router: Router = express.Router();
    const wishService = WishService.getInstance();

    /**
     * Return only one post in JSON relative to its id
     */

    router.get('/iwant/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        wishService.getToyWish(id).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });
 
    router.get('/', (req: Request, res: Response) => {
        wishService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    router.get('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        wishService.getById(id).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });

      router.post('/create', (req: Request, res: Response) => {
        const wish: Wish = req.body; // Automatically transform in a Post object
  
        wishService.create(wish).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });


    app.use('/wish', router);
};
