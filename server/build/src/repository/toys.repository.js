"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var toy_1 = require("../models/toy");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var ToyRepository = /** @class */ (function () {
    function ToyRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'toy';
    }
    ToyRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new ToyRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    ToyRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * FROM " + this.table)
            .then(function (results) {
            return results.map(function (toy) { return new toy_1.Toy(toy); });
        });
    };
    ToyRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new toy_1.Toy(results[0]); });
    };
    ToyRepository.prototype.insert = function (toy) {
        var _this = this;
        return this.connection.query("INSERT INTO " + this.table + " (name, image, description, user_id, charity_id) VALUES (?,?,?,?,?)", [toy.name, toy.image, toy.description, toy.user_id, toy.charity_id]).then(function (result) {
            // After an insert the insert id is directly passed in the promise
            return _this.findById(result.insertId);
        });
    };
    return ToyRepository;
}());
exports.ToyRepository = ToyRepository;
