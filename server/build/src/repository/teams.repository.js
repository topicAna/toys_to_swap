"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("./../loaders/mysql");
var team_1 = require("../models/team");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var TeamsRepository = /** @class */ (function () {
    function TeamsRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'team';
    }
    TeamsRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new TeamsRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    TeamsRepository.prototype.findAll = function () {
        return this.connection.query("SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id GROUP BY team.id")
            .then(function (results) {
            return results.map(function (team) { return new team_1.Team(team); });
        });
    };
    TeamsRepository.prototype.findTeamByUser = function (id) {
        return this.connection.query("SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id WHERE user_team.user_id = ? GROUP BY team.id", [id])
            .then(function (results) {
            return results.map(function (team) { return new team_1.Team(team); });
        });
    };
    /**
     * Make a query to the database to retrieve one post by its id in parameter.
     * Return the post found in a promise.
     * @param id post id
     */
    TeamsRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new team_1.Team(results[0]); });
    };
    TeamsRepository.prototype.searchTeam = function (name, loc) {
        return this.connection.query("SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id WHERE team.city = ? OR team.country = ? OR team.zip_code = ? OR team.name = ? GROUP BY team.id", [loc, loc, loc, name])
            .then(function (results) {
            return results;
        });
    };
    TeamsRepository.prototype.searchTeamByPlaces = function (name, loc) {
        return this.connection.query("SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id GROUP BY team.id HAVING nbPlayersRest > 0", [])
            .then(function (results) {
            return results;
        });
    };
    TeamsRepository.prototype.searchTeamByPlacesWithParams = function (name, loc) {
        return this.connection.query("SELECT count(user_team.user_id) as nbPlayers, team.nbPlayerMAx - COUNT(user_team.user_id) AS nbPlayersRest, team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country FROM user_team RIGHT JOIN team ON team.id=user_team.team_id WHERE team.city = ? OR team.country = ? OR team.zip_code = ? OR team.name = ? GROUP BY team.id HAVING nbPlayersRest > 0", [loc, loc, loc, name])
            .then(function (results) {
            return results;
        });
    };
    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param post post to create
     */
    TeamsRepository.prototype.insert = function (team) {
        var _this = this;
        return this.connection.query("INSERT INTO " + this.table + " (name, nbPlayerMax, city, zip_code, country) VALUES (?,?,?,?,?)", [team.name, team.nbPlayerMax, team.city, team.zip_code, team.country]).then(function (result) {
            // After an insert the insert id is directly passed in the promise
            return _this.findById(result.insertId);
        });
    };
    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param post post to update
     */
    TeamsRepository.prototype.update = function (team) {
        var _this = this;
        return this.connection.query("UPDATE " + this.table + " SET name = ?, logo = ?, details = ?, nbPlayerMax = ?, city = ?, zip_code = ?, country = ? WHERE id = ?", [team.name, team.logo, team.details, team.nbPlayerMax, team.city, team.zip_code, team.country, team.id]).then(function () {
            return _this.findById(team.id);
        });
    };
    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    TeamsRepository.prototype.delete = function (id) {
        return this.connection.query("DELETE FROM " + this.table + " WHERE id = ?", [id]);
    };
    return TeamsRepository;
}());
exports.TeamsRepository = TeamsRepository;
