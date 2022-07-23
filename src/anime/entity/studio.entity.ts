import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Studio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studio: string;
}
