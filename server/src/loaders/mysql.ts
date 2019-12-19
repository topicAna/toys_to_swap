import { createConnection, Connection } from 'mysql';

export class MysqlConnection {

  // Make service => singletonTransformation de notre service en singleton
  private static instance: MysqlConnection;
  private cnx: Connection;

  private constructor() {
    this.cnx = createConnection({
      host: 'localhost', // address of the server
      user: 'root', // username
      password: 'root',
      database: 'toys_to_swap',
    });
  }

  static getInstance() {
      if (!this.instance) {
          this.instance = new MysqlConnection();
      }
      return this.instance;
  }

  query(sql: string, params: any[] = []) {
    return new Promise((resolve, reject) => {
      this.cnx.query(sql, params, (err, results) => {
          if (err) {
            return reject(err);
          }

          resolve(results);
      })
    })
  }
}