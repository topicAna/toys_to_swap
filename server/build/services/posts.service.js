"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var posts_repository_1 = require("./../repository/posts.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
var PostsService = /** @class */ (function () {
    function PostsService() {
        this.repository = posts_repository_1.PostsRepository.getInstance();
    }
    PostsService.getInstance = function () {
        if (!this.instance) {
            this.instance = new PostsService();
        }
        return this.instance;
    };
    // Business logic
    /**
     * Return a promise which contains an array of posts.
     */
    PostsService.prototype.getAll = function () {
        return this.repository.findAll();
    };
    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    PostsService.prototype.getById = function (id) {
        return this.repository.findById(id);
    };
    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    PostsService.prototype.create = function (post) {
        return this.repository.insert(post);
    };
    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    PostsService.prototype.update = function (post) {
        return this.repository.update(post);
    };
    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    PostsService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return PostsService;
}());
exports.PostsService = PostsService;
