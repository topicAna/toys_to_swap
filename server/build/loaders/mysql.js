"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
var MysqlConnection = /** @class */ (function () {
    function MysqlConnection() {
        this.cnx = mysql_1.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Mot2passe',
            database: 'eyg',
        });
    }
    MysqlConnection.getInstance = function () {
        if (!this.instance) {
            this.instance = new MysqlConnection();
        }
        return this.instance;
    };
    MysqlConnection.prototype.query = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.cnx.query(sql, params, function (err, results) {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    };
    return MysqlConnection;
}());
exports.MysqlConnection = MysqlConnection;
