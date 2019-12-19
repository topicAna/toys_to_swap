"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var toy_service_1 = require("../services/toy.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.ToyController = function (app) {
    var router = express_1.default.Router();
    var toyService = toy_service_1.ToyService.getInstance();
    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/', function (req, res) {
        toyService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.get('/:id', function (req, res) {
        var id = parseInt(req.params.id);
        toyService.getById(id).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.post('/', function (req, res) {
        var toy = req.body; // Automatically transform in a Post object
        toyService.create(toy).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/toy', router);
};
