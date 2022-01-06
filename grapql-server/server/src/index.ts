import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
  });
};

const app = express();
app.use(cors());
app.use(express.json());
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     graphiql: true,
//   })
// );
app.listen(3001, () => {
  console.log("Server started at port 3001");
});

main().catch((err) => {
  console.log(err);
});
