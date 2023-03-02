// ----------------------------------------------------------------------------------
// day 17. nodejs 서버 구축
// ----------------------------------------------------------------------------------

console.log("반갑습니다~");

const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.22.64.245",
  port: 5001,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다!");
  })
  .catch((error) => {
    console.log("DB접속에 실해했습니다.");
    console.log("원인: ");
    console.log(error);
  });
