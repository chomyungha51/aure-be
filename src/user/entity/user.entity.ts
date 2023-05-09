import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@Index(['iduser', 'nickname', 'password'])
export class User {
  @PrimaryGeneratedColumn()
  @Column({ primary: true, nullable: false, unique: true })
  iduser?: number;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: false })
  password: string;
}
