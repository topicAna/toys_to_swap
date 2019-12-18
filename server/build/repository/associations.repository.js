"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var association_1 = require("../models/association");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var AssociationsRepository = /** @class */ (function () {
    function AssociationsRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'charity';
    }
    AssociationsRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new AssociationsRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    AssociationsRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * from " + this.table)
            .then(function (results) {
            return results.map(function (association) { return new association_1.Association(association); });
        });
    };
    AssociationsRepository.prototype.findAllByName = function () {
        return this.connection.query("SELECT DISTINCT(name) from " + this.table)
            .then(function (results) {
            return results.map(function (association) { return new association_1.Association(association); });
        });
    };
    /**
     * Make a query to the database to retrieve one post by its id in parameter.
     * Return the post found in a promise.
     * @param id post id
     */
    AssociationsRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new association_1.Association(results[0]); });
    };
    AssociationsRepository.prototype.searchAssociationByPlaces = function (name, loc) {
        return this.connection.query("SELECT count(user_association.user_id) as nbPlayers, association.nbPlayerMAx - COUNT(user_association.user_id) AS nbPlayersRest, association.name, association.logo, association.details, association.nbPlayerMax, association.city, association.zip_code, association.country FROM user_association RIGHT JOIN association ON association.id=user_association.association_id GROUP BY association.id HAVING nbPlayersRest > 0", [])
            .then(function (results) {
            return results;
        });
    };
    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    AssociationsRepository.prototype.delete = function (id) {
        return this.connection.query("DELETE FROM " + this.table + " WHERE id = ?", [id]);
    };
    return AssociationsRepository;
}());
exports.AssociationsRepository = AssociationsRepository;
