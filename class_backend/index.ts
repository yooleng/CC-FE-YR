// ----------------------------------------------------------------------------------
// 17. nodejs 서버 구축 ~ 18. API 만들기
// ----------------------------------------------------------------------------------

// console.log("반갑습니다~");
// const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server"); // common js(옛날 방식)
import { ApolloServer, gql } from "apollo-server"; // module(요즘 방식)

// DOCS (API type)
const typeDefs = gql`
  # 없는 객체는 직접 만들어야 한다. 타입 안에 어디다 적어도 상관없음

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    # typescript 타입이 아니라 gql 타입을 적어줘야 함. (헷갈리니까 주의!)
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    fetchBoards: [MyBoard]
  }
  type Mutation {
    # 연습용 (example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용 (backend 방식) - 묶기
    createBoard(createBoardInput: CreateBoardInput!): String
    updateBoard: String
    deleteBoard: String
  }
`;

// API
// 누군가 해당 api를 요청했다면 아래의 함수가 실행된다.
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 모두 꺼내기
      const result = await Board.find();

      // 한 개만 골라서 꺼내기
      // Board.findOne({where: {number: 3}})

      return result;
      // 배열 안에 객체 형식으로 게시글이 들어있음 (docs의 type이 string이 아님!)
      // [{ number: 3, writer: "철수", title: "안녕하십니까", contents: "반갑습니다~!"}, {...}, {...}, ...]
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        // pk 말고 나머지 입력

        // 스프레드 연산자 사용하는 방식
        ...args.createBoardInput,

        // 하나하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공하였습니다. ";
    },

    updateBoard: async () => {
      await Board.update({ number: 3 }, { writer: "영희" }); // 3번 게시글의 작성자를 영희로 바꿔줘
      return "게시글 수정에 성공하였습니다.";
    },

    deleteBoard: async () => {
      await Board.delete({ number: 3 }); // 3번 게시글을 삭제해줘

      // 실무에서는 실제 데이터를 삭제하지 않고, isDeleted라는 컬럼이 true이면 삭제되었다고 가정한다.
      // await Board.update({ number: 3 }, { isDeleted: true });

      // 근데 isDeleted를 사용하면 언제 삭제되었는지 알 수 없음
      // 따라서 isDeleted 대신 삭제한 시간을 추가해주는 방법 사용 (똑같이 하나의 컬럼인데 더 많은 데이터 보관 가능)
      // deletedAt이 null이면, 삭제가 안된 게시글
      // new Date() 시간이 들어가 있으면 그 시간에 삭제된 게시글
      // await Board.update({ number: 3 }, { deletedAt: new Date() });

      return "게시글 삭제에 성공하였습니다.";
    },
  },
};

// typeDefs와 resolvers는 위에 우리가 만들어준 타입과 api 이다.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,

  // 선택한 사이트만 풀어주고 싶을 때
  // cors: {
  //   origin: ["http://naver.com", "http://qqq.com"]
  // }
});

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

// initialize : 초기화되면서 자동으로 접속이 됨
AppDataSource.initialize()
  .then(() => {
    // 접속에 성공하면 실행되는 부분
    console.log("DB접속에 성공했습니다!");

    // 서버 24시간 열어주고 접속 기다리기
    // DB 연결까지 모두 끝나고 가장 마지막에 실행
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    // 접속에 실패하면 실행되는 부분
    console.log("DB접속에 실해했습니다.");
    console.log("원인: ");
    console.log(error);
  });
