import { MysqlConnection } from './../loaders/mysql';
import { Toy } from '../models/toy';


/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ToyRepository {

    private static instance: ToyRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'toy';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ToyRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */


    findAll(): Promise<Toy[]> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE user_id != 1`)
          .then((results: any) => {
            return results.map((toy: any) => new Toy(toy));
          });
    }

    findToyByUserId(id: number): Promise<Toy> {
        return this.connection.query(`select toy.id, toy.name, toy.image, toy.description, toy.user_id, toy.charity_id FROM toy where toy.user_id=?;`, [id])
        .then((results: any) => {
          return results.map((toy: Toy) => new Toy(toy));
        });
      }

    findById(id: number): Promise<Toy> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Toy(results[0]));
    }

    insert(toy: Toy) {
        return this.connection.query(
          `INSERT INTO ${this.table} (name, image, description, user_id, charity_id) VALUES (?,?,?,?,?)`,
          [toy.name, toy.image, toy.description, toy.user_id, toy.charity_id]
        ).then((result: any) => {
          // After an insert the insert id is directly passed in the promise
          return this.findById(result.insertId);
        });
      }

      deleteToyByUser(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM toy WHERE id = ?`, [id]);
      }

}
