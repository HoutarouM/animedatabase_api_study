import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class AnimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  alternative_title: string;

  @Column()
  japanese_title: string;

  @Column()
  episodes: number;

  @Column()
  aired_from: Date;

  @Column()
  aired_to: Date;

  @Column()
  source: string;
}
