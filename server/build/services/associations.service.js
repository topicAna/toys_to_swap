"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var associations_repository_1 = require("../repository/associations.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var AssociationsService = /** @class */ (function () {
    function AssociationsService() {
        this.repository = associations_repository_1.AssociationsRepository.getInstance();
    }
    AssociationsService.getInstance = function () {
        if (!this.instance) {
            this.instance = new AssociationsService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    AssociationsService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    AssociationsService.prototype.getAllByName = function () {
        return this.repository.findAllByName();
    };
    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    AssociationsService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    AssociationsService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return AssociationsService;
}());
exports.AssociationsService = AssociationsService;
