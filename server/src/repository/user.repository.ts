import { MysqlConnection } from './../loaders/mysql';
import { User } from '../models/user';


/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class UserRepository {

    private static instance: UserRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'user';

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<User[]> {
        return this.connection.query(`SELECT * FROM ${this.table}`)
        .then((results: any) => {
            return results.map((user: any) => new User(user));
        });
    }

    verifyUser(username: string){
        return this.connection.query(`select * from ${this.table} where pseudo=?`, [username])
            .then((results: any) => {
                return results;
            });
    }

}