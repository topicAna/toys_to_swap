import { MysqlConnection } from './../loaders/mysql';
import { Association } from '../models/association';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class AssociationsRepository {

    private static instance: AssociationsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'charity';

    static getInstance() {
        if (!this.instance) {
            this.instance = new AssociationsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Association[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
            return results.map((association: any) => new Association(association));
            });
    }

    findAllByName(): Promise<Association[]> {
        return this.connection.query(`SELECT DISTINCT(name) from ${this.table}`)
        .then((results: any) => {
            return results.map((association: any) => new Association(association));
            });
    }


    /**
     * Make a query to the database to retrieve one post by its id in parameter. 
     * Return the post found in a promise.
     * @param id post id
     */
    findById(id: number): Promise<Association> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Association(results[0]));
    }


    searchAssociationByPlaces(name: string, loc: string): Promise<Association> {
        return this.connection.query(`SELECT count(user_association.user_id) as nbPlayers, association.nbPlayerMAx - COUNT(user_association.user_id) AS nbPlayersRest, association.name, association.logo, association.details, association.nbPlayerMax, association.city, association.zip_code, association.country FROM user_association RIGHT JOIN association ON association.id=user_association.association_id GROUP BY association.id HAVING nbPlayersRest > 0`, [
        ])
        .then((results: any) => {
        
        return results;
        });
    }


    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    delete(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
