"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var wish_service_1 = require("../services/wish.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.WishController = function (app) {
    var router = express_1.default.Router();
    var wishService = wish_service_1.WishService.getInstance();
    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/iwant/:id', function (req, res) {
        var id = parseInt(req.params.id);
        wishService.getToyWish(id).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.get('/', function (req, res) {
        wishService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.get('/:id', function (req, res) {
        var id = parseInt(req.params.id);
        wishService.getById(id).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.post('/create', function (req, res) {
        var wish = req.body; // Automatically transform in a Post object
        wishService.create(wish).then(function (result) {
            res.send(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/wish', router);
};
