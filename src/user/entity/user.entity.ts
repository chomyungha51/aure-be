import { Entity, Column, Index } from 'typeorm';

@Entity()
@Index(['userId', 'email'])
export class User {
  @Column({ unique: true })
  iduser: string;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: false })
  password: string;
}
