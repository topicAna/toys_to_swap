import express, { Router, Request, Response, Application } from 'express';
import { TeamsService } from '../services/teams.service';
import { Team } from '../models/team';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TeamsController = (app: Application) => {

    const router: Router = express.Router();
    const teamsService = TeamsService.getInstance();

    /**
     * Return only one post in JSON relative to its id
     */

    router.get('/search/places/params', (req: Request, res: Response) => {
      const loc = req.query.loc;
      const name = req.query.name;
      console.log(req.query)
      teamsService.getBySearchFormPlacesWithParams(name, loc).then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log(err);
      })
    });

    router.get('/search/places', (req: Request, res: Response) => {
      const loc = req.query.loc;
      const name = req.query.name;
      console.log(req.query)
      teamsService.getBySearchFormPlaces(name, loc).then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log(err);
      })
    });

    router.get('/search/userteams/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id)
      console.log(req.query)
      teamsService.getTeamByUserId(id).then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log(err);
      })
    });
    
    router.get('/search', (req: Request, res: Response) => {
      const loc = req.query.loc;
      const name = req.query.name;
  
      teamsService.getBySearchForm(name, loc).then(results => {
        res.send(results);
      })
      .catch(err => {
        console.log(err);
      })
    });

  
    
    router.get('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      teamsService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Return all posts in JSON
     */
    router.get('/', (req: Request, res: Response) => {
        teamsService.getAll().then(results => {
            res.send(results);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new post from a JSON body and return the created post in JSON.
     */
    router.post('/creation', (req: Request, res: Response) => {
      const team: Team = req.body; // Automatically transform in a Post object

      teamsService.create(team).then(result => {
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
      const team: Team = req.body; // req.params.id is automatically set into the body

      teamsService.update(team).then(result => {
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

      teamsService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/teams', router);
};
