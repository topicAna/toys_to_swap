import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';


/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const router: Router = express.Router();
    const userService = UserService.getInstance();

    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/getUser/:username', (req: Request, res: Response) => {
        const username = req.params.username;
        userService.verifyUser(username).then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });

    router.get('/', (req: Request, res: Response) => {
        userService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
            console.log(err);
        })
    });


    app.use('/user', router);
};