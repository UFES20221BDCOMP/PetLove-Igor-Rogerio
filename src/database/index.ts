import { Animal } from "../model/Animal";
import { Connection, createConnection, getConnectionOptions, DataSource } from "typeorm";

/* Definição do datasource do banco postgres */
const AppDataSource = new DataSource({
  type : "postgres",
  host : "database_petlove",
  synchronize: true,
  port : 5432,
  username : "petlove",
  password : "petlove",
  database : "petlove",
  logging: true,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/model/*.ts"],
})

AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export { AppDataSource}