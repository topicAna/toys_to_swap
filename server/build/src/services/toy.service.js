"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toys_repository_1 = require("../repository/toys.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var ToyService = /** @class */ (function () {
    function ToyService() {
        this.repository = toys_repository_1.ToyRepository.getInstance();
    }
    ToyService.getInstance = function () {
        if (!this.instance) {
            this.instance = new ToyService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    ToyService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    ToyService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    ToyService.prototype.create = function (toy) {
        return this.repository.insert(toy);
    };
    return ToyService;
}());
exports.ToyService = ToyService;
