"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_service_1 = require("./../services/events.service");
var express_1 = __importDefault(require("express"));
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.EventsController = function (app) {
    var router = express_1.default.Router();
    var eventsService = events_service_1.EventService.getInstance();
    /**
     * Return all posts in JSON
     */
    router.get('/', function (req, res) {
        eventsService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/:id', function (req, res) {
        var id = parseInt(req.params.id);
        eventsService.getById(id).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    /**
     * Create a new post from a JSON body and return the created post in JSON.
     */
    router.post('/', function (req, res) {
        var event = req.body; // Automatically transform in a Post object
        eventsService.create(event).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    /**
     * Update a post relative to its id and return the updated post in JSON.
     */
    router.put('/:id', function (req, res) {
        var event = req.body; // req.params.id is automatically set into the body
        eventsService.update(event).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    /**
     * Delete a post relative its id.
     */
    router.delete('/:id', function (req, res) {
        var id = parseInt(req.params.id);
        eventsService.delete(id).then(function (result) {
            res.send();
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/events', router);
};
