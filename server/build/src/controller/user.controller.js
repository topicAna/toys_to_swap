"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_service_1 = require("../services/user.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.UserController = function (app) {
    var router = express_1.default.Router();
    var userService = user_service_1.UserService.getInstance();
    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/getUser/:username', function (req, res) {
        var username = req.params.username;
        userService.verifyUser(username).then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    router.get('/', function (req, res) {
        userService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/user', router);
};
