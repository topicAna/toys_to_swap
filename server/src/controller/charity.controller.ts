  
import express, { Router, Request, Response, Application } from 'express';
import { CharityService } from '../services/charity.service';


/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CharityController = (app: Application) => {

    const router: Router = express.Router();
    const charityService = CharityService.getInstance();

    /**
     * Return only one post in JSON relative to its id
     */

 
    router.get('/', (req: Request, res: Response) => {
        charityService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });


    app.use('/charity', router);
};