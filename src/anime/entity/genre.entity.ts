import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;
}
