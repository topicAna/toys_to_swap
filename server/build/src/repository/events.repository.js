"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("./../models/event");
var mysql_1 = require("./../loaders/mysql");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var EventRepository = /** @class */ (function () {
    function EventRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'event';
    }
    EventRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new EventRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    EventRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * from " + this.table)
            .then(function (results) {
            return results.map(function (event) { return new event_1.Event(event); });
        });
    };
    /**
     * Make a query to the database to retrieve one post by its id in parameter.
     * Return the post found in a promise.
     * @param id post id
     */
    EventRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new event_1.Event(results[0]); });
    };
    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param event post to create
     */
    EventRepository.prototype.insert = function (event) {
        var _this = this;
        return this.connection.query("INSERT INTO " + this.table + " (name,image,description, date, zip_code) VALUES(?,?,?,?,?)", [event.name, event.image, event.description, event.date, event.zip_code]).then(function (result) {
            // After an insert the insert id is directly passed in the promise
            return _this.findById(result.insertId);
        });
    };
    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param event post to update
     */
    EventRepository.prototype.update = function (event) {
        var _this = this;
        return this.connection.query("UPDATE " + this.table + " SET name = ?, image = ?, description=?, date= ?, zip_code= ? WHERE id = ?", [event.name, event.image, event.description, event.date, event.zip_code]).then(function () {
            return _this.findById(event.id);
        });
    };
    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    EventRepository.prototype.delete = function (id) {
        return this.connection.query("DELETE FROM " + this.table + " WHERE id = ?", [id]);
    };
    return EventRepository;
}());
exports.EventRepository = EventRepository;
