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

 
    router.get('/mytoys/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        toyService.getToyByUser(id).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });

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

      router.post('/create', (req: Request, res: Response) => {
        const toy: Toy = req.body; // Automatically transform in a Post object
  
        toyService.create(toy).then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });

      router.delete('/deletetoy/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
  
        toyService.deleteToyByUser(id).then(result => {
              res.send();
          })
          .catch(err => {
            console.log(err);
          })
      });

      router.post('/upload-image', async (req, res) =>{
        try {
            if(!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let image: any = req.files.image;
    
                image.mv('./uploads/' + image.name);
    
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: image.name,
                        mimetype: image.mimetype,
                        size: image.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });


    app.use('/toy', router);
    
};
