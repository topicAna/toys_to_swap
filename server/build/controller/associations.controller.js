"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var associations_service_1 = require("../services/associations.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.AssociationsController = function (app) {
    var router = express_1.default.Router();
    var associationsService = associations_service_1.AssociationsService.getInstance();
    /**
     * Return all posts in JSON
     */
    router.get('/', function (req, res) {
        associationsService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    /**
     * Return all posts in JSON
     */
    router.get('/name', function (req, res) {
        associationsService.getAllByName().then(function (results) {
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
        associationsService.getById(id).then(function (result) {
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
        associationsService.delete(id).then(function (result) {
            res.send();
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/associations', router);
};
