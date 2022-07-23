import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Licensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licensor: string;
}
