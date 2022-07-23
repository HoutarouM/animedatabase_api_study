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
  produces: number;

  @Column()
  licensor_id: number;

  @Column()
  studio_id: number;

  @Column()
  source: string;

  //   TODO: change to relationships
  @Column()
  genres_id: number;
}
