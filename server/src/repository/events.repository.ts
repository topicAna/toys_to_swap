import { Event } from './../models/event';
import { Participate } from './../models/participate';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class EventRepository {

    private static instance: EventRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'event';

    static getInstance() {
        if (!this.instance) {
            this.instance = new EventRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Event[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((event: any) => new Event(event));
          });
    }

    /**
     * Make a query to the database to retrieve one post by its id in parameter. 
     * Return the post found in a promise.
     * @param id post id
     */
    findById(id: number): Promise<Event> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Event(results[0]));
    }

    findParticipateByUserId(id: number): Promise<Event> {
      return this.connection.query(`select event.id, event.name, event.image, event.description, event.date, event.zip_code FROM participate JOIN event ON participate.event_id=event.id where participate.user_id=?;`, [id])
      .then((results: any) => {
        return results.map((participate: Participate) => new Participate(participate));
      });
    }
  
   findByUser(id: number): Promise<Event> {
       return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
         .then((results: any) => new Event(results[0]));
   }


    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param event post to create
     */
    insert(event: Event) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name,image,description, date, zip_code) VALUES(?,?,?,?,?)`,
        [event.name, event.image, event.description, event.date, event.zip_code]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    insertByUser(participate: Participate) {
      return this.connection.query(
        `INSERT INTO participate (user_id, event_id) VALUES(?,?)`,
        [participate.user_id, participate.event_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param event post to update
     */
    update(event: Event) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, image = ?, description=?, date= ?, zip_code= ? WHERE id = ?`,
        [event.name, event.image, event.description, event.date, event.zip_code]
      ).then(() => {
        return this.findById(event.id);
      });
    }

    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }

    deleteEventByUser(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM participate WHERE event_id = ?`, [id]);
    }
}
