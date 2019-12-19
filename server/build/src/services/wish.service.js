"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wish_repository_1 = require("../repository/wish.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var WishService = /** @class */ (function () {
    function WishService() {
        this.repository = wish_repository_1.WishRepository.getInstance();
    }
    WishService.getInstance = function () {
        if (!this.instance) {
            this.instance = new WishService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    WishService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    WishService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    WishService.prototype.getToyWish = function (id) {
        return this.repository.findToyIWish(id);
    };
    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    WishService.prototype.create = function (wish) {
        return this.repository.insert(wish);
    };
    return WishService;
}());
exports.WishService = WishService;
