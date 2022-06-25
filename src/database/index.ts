import { Connection, createConnection, getConnectionOptions, DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type : "postgres",
  host : "localhost",
  port : 5432,
  username : "docker",
  password : "petlove",
  database : "petlove",
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/model/*.ts"],
})

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? "petlove_test"
          : defaultOptions.database,
    })
  );
};

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export { AppDataSource}