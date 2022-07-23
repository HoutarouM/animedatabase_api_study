import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producer: string;
}
