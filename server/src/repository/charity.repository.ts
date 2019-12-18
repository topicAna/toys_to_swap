import { MysqlConnection } from './../loaders/mysql';
import { Charity } from '../models/charity';


/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class CharityRepository {

    private static instance: CharityRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'charity';

    static getInstance() {
        if (!this.instance) {
            this.instance = new CharityRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Charity[]> {
        return this.connection.query(`SELECT * FROM ${this.table}`)
          .then((results: any) => {
            return results.map((charity: any) => new Charity(charity));
          });
    }

}
