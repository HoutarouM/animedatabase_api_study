import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
