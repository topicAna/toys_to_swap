"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teams_repository_1 = require("../repository/teams.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var TeamsService = /** @class */ (function () {
    function TeamsService() {
        this.repository = teams_repository_1.TeamsRepository.getInstance();
    }
    TeamsService.getInstance = function () {
        if (!this.instance) {
            this.instance = new TeamsService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    TeamsService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    TeamsService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    TeamsService.prototype.create = function (team) {
        return this.repository.insert(team);
    };
    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    TeamsService.prototype.update = function (team) {
        return this.repository.update(team);
    };
    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    TeamsService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return TeamsService;
}());
exports.TeamsService = TeamsService;
