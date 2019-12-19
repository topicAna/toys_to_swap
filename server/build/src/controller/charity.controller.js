"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var charity_service_1 = require("../services/charity.service");
/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
exports.CharityController = function (app) {
    var router = express_1.default.Router();
    var charityService = charity_service_1.CharityService.getInstance();
    /**
     * Return only one post in JSON relative to its id
     */
    router.get('/', function (req, res) {
        charityService.getAll().then(function (results) {
            res.send(results);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
    app.use('/charity', router);
};
