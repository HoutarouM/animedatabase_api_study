import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Anime from './anime.entity';

@Entity()
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => Anime, (anime) => anime.type)
  animes: Anime[];
}
