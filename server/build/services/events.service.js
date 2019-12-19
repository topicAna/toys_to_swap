"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_repository_1 = require("./../repository/events.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var EventService = /** @class */ (function () {
    function EventService() {
        this.repository = events_repository_1.EventRepository.getInstance();
    }
    EventService.getInstance = function () {
        if (!this.instance) {
            this.instance = new EventService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    EventService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    EventService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    /**
     * Create a new post and return a promise which contains the created post.
     * @param event post to create
     */
    EventService.prototype.create = function (event) {
        return this.repository.insert(event);
    };
    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param event post to update
     */
    EventService.prototype.update = function (event) {
        return this.repository.update(event);
    };
    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    EventService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return EventService;
}());
exports.EventService = EventService;
