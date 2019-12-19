import { MysqlConnection } from './../loaders/mysql';
import { Wish } from '../models/wish';
import { Toy } from '../models/toy';


/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class WishRepository {

    private static instance: WishRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'wish';

    static getInstance() {
        if (!this.instance) {
            this.instance = new WishRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Wish[]> {
        return this.connection.query(`SELECT * FROM ${this.table} where user_id=1`)
          .then((results: any) => {
            return results.map((toy: any) => new Wish(toy));
          });
    }

    findById(id: number): Promise<Wish> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Wish(results[0]));
    }

    findToyIWish(id: number): Promise<Toy[]>
    {
        return this.connection.query(`select toy.id, toy.name, toy.image, toy.description from wish JOIN toy on wish.toy_id = toy.id where toy.user_id=?`,[id])
        .then((result: any) => {
            return result.map((toy:any) => new Toy(toy));
        });
    }

    insert(wish: Wish) {
        return this.connection.query(
          `INSERT INTO ${this.table} (user_id, toy_id) VALUES (?,?)`,
          [wish.user_id, wish.toy_id]
        ).then((result: any) => {
          // After an insert the insert id is directly passed in the promise
          return this.findById(result.insertId);
        });
      }

      deleteWishByUser(id: number): Promise<any> {
        return this.connection.query(`DELETE FROM wish WHERE toy_id = ?`, [id]);
      }
}
