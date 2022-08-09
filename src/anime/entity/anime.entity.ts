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
import Genre from './genre.entity';

@Entity()
export default class Anime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  alternative_title?: string;

  @Column()
  japanese_title: string;

  @Column({ nullable: true })
  poster_path?: string;

  @ManyToMany(() => Type)
  @JoinTable()
  types: Type[];

  @Column({ nullable: true })
  episodes?: number;

  @Column({ nullable: true })
  duration?: number;

  @Column({ nullable: true })
  aired_from?: Date;

  @Column({ nullable: true })
  aired_to?: Date;

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

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[];

  @Column({ nullable: true })
  description?: string;
}
