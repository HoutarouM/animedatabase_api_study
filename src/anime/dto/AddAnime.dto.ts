import { ApiProperty } from '@nestjs/swagger';

// entities
import Genre from '../entity/genre.entity';
import Licensor from '../entity/licensor.entity';
import Producer from '../entity/producer.entity';
import Studio from '../entity/studio.entity';
import Type from '../entity/type.entity';

export default class AddAnimeDto {
  @ApiProperty({
    description: 'Anime title.',
    type: String,
    nullable: false,
  })
  title: string;

  @ApiProperty({
    description: 'Alternative anime title.',
    type: String,
    nullable: true,
    required: false,
  })
  alternative_title?: string;

  @ApiProperty({
    description: 'Japanese anime title.',
    type: String,
    nullable: false,
  })
  japanese_title: string;

  @ApiProperty({
    description: 'Anime type np. TV series, Film and so on.',
    type: Type,
    nullable: false,
  })
  type: Type;

  @ApiProperty({
    description: 'Count of episodes',
    type: Number,
    nullable: true,
    required: false,
  })
  episodes?: number;

  @ApiProperty({
    description: 'Duration of episode or film.',
    type: Number,
    nullable: true,
    required: false,
  })
  duration?: number;

  @ApiProperty({
    description: 'Date anime aired from.',
    type: Date,
    nullable: true,
    required: false,
  })
  aired_from?: Date;

  @ApiProperty({
    description: 'Date anime aired to.',
    type: Date,
    nullable: true,
    required: false,
  })
  aired_to?: Date;

  @ApiProperty({
    description: 'List of anime producers.',
    type: [Producer],
    nullable: false,
  })
  producers: Producer[];

  @ApiProperty({
    description: 'List of anime licensors.',
    type: [Licensor],
    nullable: false,
  })
  licensors: Licensor[];

  @ApiProperty({
    description: 'List of studios worked on anime.',
    type: [Studio],
    nullable: false,
  })
  studios: Studio[];

  @ApiProperty({
    description: 'Anime source np. Manga.',
    type: String,
    nullable: false,
    enum: ['Manga', 'Original'],
  })
  source: string;

  @ApiProperty({
    description: 'Anime genres np. Comedy.',
    type: [Genre],
    nullable: false,
  })
  genres: Genre[];

  @ApiProperty({
    description: 'Title description.',
    type: String,
    nullable: true,
    required: false,
  })
  description?: string;
}
