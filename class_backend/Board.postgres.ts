// ----------------------------------------------------------------------------------
// 17. nodejs 서버 구축 - Board 테이블 만들기
// ----------------------------------------------------------------------------------

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @ : 데코레이터
@Entity() // Board가 Entity(table)이라는걸 알려주는 코드
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // PK
  number!: number;

  @Column({ type: "text" }) // 아래줄에 있는게 Column이라도 알려주는 코드
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}
