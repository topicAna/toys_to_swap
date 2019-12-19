"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var user_1 = require("../models/user");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'user';
    }
    UserRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new UserRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    UserRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * FROM " + this.table)
            .then(function (results) {
            return results.map(function (user) { return new user_1.User(user); });
        });
    };
    UserRepository.prototype.verifyUser = function (username) {
        return this.connection.query("select * from " + this.table + " where pseudo=?", [username])
            .then(function (results) {
            return results;
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
