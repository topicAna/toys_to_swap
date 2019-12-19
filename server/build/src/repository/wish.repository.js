"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var wish_1 = require("../models/wish");
var toy_1 = require("../models/toy");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var WishRepository = /** @class */ (function () {
    function WishRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'wish';
    }
    WishRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new WishRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    WishRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * FROM " + this.table)
            .then(function (results) {
            return results.map(function (toy) { return new wish_1.Wish(toy); });
        });
    };
    WishRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new wish_1.Wish(results[0]); });
    };
    WishRepository.prototype.findToyIWish = function (id) {
        return this.connection.query("select toy.name, toy.image, toy.description from wish JOIN toy on wish.toy_id = toy.id where toy.user_id=?", [id])
            .then(function (result) {
            return result.map(function (toy) { return new toy_1.Toy(toy); });
        });
    };
    WishRepository.prototype.insert = function (wish) {
        var _this = this;
        return this.connection.query("INSERT INTO " + this.table + " (user_id, toy_id) VALUES (?,?)", [wish.user_id, wish.toy_id]).then(function (result) {
            // After an insert the insert id is directly passed in the promise
            return _this.findById(result.insertId);
        });
    };
    return WishRepository;
}());
exports.WishRepository = WishRepository;
