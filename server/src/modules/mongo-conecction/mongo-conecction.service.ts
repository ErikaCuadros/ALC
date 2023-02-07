import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mongoose';
 
@Injectable()
export class MongoConnectionService {
 
    private dbConnection: Connection;
 
    constructor(){
        this.createConnectionDB();
    }
 
    async createConnectionDB(){
 
        const DB_URI = 'mongodb://Erika:2123@product-nest.me6bnsb.mongodb.net:27017/test';
         
        this.dbConnection = await createConnection(DB_URI);
 
        this.dbConnection.once('open', () => {
            console.log('Connected to MongoDB');
        })
 
        /*this.dbConnection.once('error', () => {
            console.log('Error connecting to MongoDB');
        })*/
 
    }
     
    getConnection(): Connection{
        return this.dbConnection;
    }
 
}