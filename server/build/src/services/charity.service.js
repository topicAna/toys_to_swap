"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var charity_repository_1 = require("../repository/charity.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var CharityService = /** @class */ (function () {
    function CharityService() {
        this.repository = charity_repository_1.CharityRepository.getInstance();
    }
    CharityService.getInstance = function () {
        if (!this.instance) {
            this.instance = new CharityService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    CharityService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    return CharityService;
}());
exports.CharityService = CharityService;
