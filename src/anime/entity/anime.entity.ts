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
import Studio from './studio.entity';

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
  producers: Producer[];

  @ManyToMany(() => Licensor)
  @JoinTable()
  licensors: Licensor[];

  @ManyToMany(() => Studio)
  @JoinTable()
  studios: Studio[];

  @Column()
  source: string;

  @Column()
  genres: number;
}
