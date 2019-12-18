"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = require("./../models/post");
var mysql_1 = require("./../loaders/mysql");
/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
var PostsRepository = /** @class */ (function () {
    function PostsRepository() {
        this.connection = mysql_1.MysqlConnection.getInstance();
        this.table = 'posts';
    }
    PostsRepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new PostsRepository();
        }
        return this.instance;
    };
    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    PostsRepository.prototype.findAll = function () {
        return this.connection.query("SELECT * from " + this.table)
            .then(function (results) {
            return results.map(function (post) { return new post_1.Post(post); });
        });
    };
    /**
     * Make a query to the database to retrieve one post by its id in parameter.
     * Return the post found in a promise.
     * @param id post id
     */
    PostsRepository.prototype.findById = function (id) {
        return this.connection.query("SELECT * FROM " + this.table + " WHERE id = ?", [id])
            .then(function (results) { return new post_1.Post(results[0]); });
    };
    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param post post to create
     */
    PostsRepository.prototype.insert = function (post) {
        var _this = this;
        return this.connection.query("INSERT INTO " + this.table + " (title, content) VALUES (?,?)", [post.title, post.content]).then(function (result) {
            // After an insert the insert id is directly passed in the promise
            return _this.findById(result.insertId);
        });
    };
    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param post post to update
     */
    PostsRepository.prototype.update = function (post) {
        var _this = this;
        return this.connection.query("UPDATE " + this.table + " SET title = ?, content = ? WHERE id = ?", [post.title, post.content, post.id]).then(function () {
            return _this.findById(post.id);
        });
    };
    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    PostsRepository.prototype.delete = function (id) {
        return this.connection.query("DELETE FROM " + this.table + " WHERE id = ?", [id]);
    };
    return PostsRepository;
}());
exports.PostsRepository = PostsRepository;
