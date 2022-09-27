import { connection } from "../../../connection";


(async () => {
  await connection.promise().query(`
    CREATE TABLE migrations(
        id VARCHAR(300) NOT NULL PRIMARY KEY
    );
  `);
  process.exit(0);
})();
