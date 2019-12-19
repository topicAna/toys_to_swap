"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var charity_1 = require("../models/charity");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var CharityRepository = /** @class */ (function () {
    function CharityRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'charity';
    }
    CharityRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new CharityRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    CharityRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * FROM " + this.table)
            .then(function (results) {
            return results.map(function (charity) { return new charity_1.Charity(charity); });
        });
    };
    return CharityRepository;
}());
exports.CharityRepository = CharityRepository;
