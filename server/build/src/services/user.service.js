"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_repository_1 = require("../repository/user.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var UserService = /** @class */ (function () {
    function UserService() {
        this.repository = user_repository_1.UserRepository.getInstance();
    }
    UserService.getInstance = function () {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    UserService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    UserService.prototype.verifyUser = function (username) {
        return this.repository.verifyUser(username);
    };
    return UserService;
}());
exports.UserService = UserService;
