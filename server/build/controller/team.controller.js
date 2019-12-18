"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var teams_service_1 = require("../services/teams.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.TeamsController = function (app) {
    var router = express_1.default.Router();
    var teamsService = teams_service_1.TeamsService.getInstance();
    /**
     * Return all posts in JSON
     */
    router.get('/', function (req, res) {
        teamsService.getAll().then(function (results) {
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
        teamsService.getById(id).then(function (result) {
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
        var team = req.body; // Automatically transform in a Post object
        teamsService.create(team).then(function (result) {
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
        var team = req.body; // req.params.id is automatically set into the body
        teamsService.update(team).then(function (result) {
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
        teamsService.delete(id).then(function (result) {
            res.send();
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/teams', router);
};
