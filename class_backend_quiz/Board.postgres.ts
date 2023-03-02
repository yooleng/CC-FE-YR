// ----------------------------------------------------------------------------------
// day 17. nodejs 서버 구축 - Board 테이블 만들기
// ----------------------------------------------------------------------------------

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // PK
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}
