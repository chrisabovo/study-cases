import * as mongoose from 'mongoose';
import { AppConfig } from './../config/app.config';

export class MongoDataAccess {
  static mongooseInstance: any;
  static mongooseConnection: mongoose.Connection;

  static connect(): mongoose.Connection {
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    this.mongooseConnection = mongoose.connection;
    this.mongooseConnection
      .once('open', () => {
        console.log('Conectado ao mongodb.');
      })
      .on('error', error => {
        console.error(error);
      });

    this.mongooseInstance = mongoose.connect(AppConfig.MONGODB_CONNECTION_STRING); // , { useMongoClient: true });
    return this.mongooseInstance;
  }

  constructor() {
    MongoDataAccess.connect();
  }
}

MongoDataAccess.connect();
