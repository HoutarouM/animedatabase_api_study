import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// entities
import Type from './type.entity';
import Producer from './producer.entity';
import Licensor from './licensor.entity';

@Entity()
export default class Anime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  alternative_title: string;

  @Column()
  japanese_title: string;

  @ManyToMany(() => Type)
  @JoinTable()
  types: Type[];

  @Column()
  episodes: number;

  @Column()
  aired_from: Date;

  @Column()
  aired_to: Date;

  @ManyToMany(() => Producer)
  @JoinTable()
  produces: Producer[];

  @ManyToMany(() => Licensor)
  @JoinTable()
  licensors: Licensor[];

  @Column()
  studios: number;

  @Column()
  source: string;

  //   TODO: change to relationships
  @Column()
  genres_id: number;
}
