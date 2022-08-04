import { ApiProperty } from '@nestjs/swagger';
import Genre from '../entity/genre.entity';
import Licensor from '../entity/licensor.entity';
import Producer from '../entity/producer.entity';
import Studio from '../entity/studio.entity';
import Type from '../entity/type.entity';

export default class EditAnimeDto {
  @ApiProperty({
    description: 'Anime title.',
    type: String,
    nullable: false,
    required: false,
  })
  title: string;

  @ApiProperty({
    description: 'Alternative anime title.',
    type: String,
    required: false,
  })
  alternative_title: string;

  @ApiProperty({
    description: 'Japanese anime title.',
    type: String,
    required: false,
  })
  japanese_title: string;

  @ApiProperty({
    description: 'Anime type np. TV series, Film and so on.',
    type: [Type],
    required: false,
  })
  types: Type[];

  @ApiProperty({
    description: 'Count of episodes',
    type: Number,
    required: false,
  })
  episodes?: number;

  @ApiProperty({
    description: 'Duration of episode or film.',
    type: Number,
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
    required: false,
  })
  producers: Producer[];

  @ApiProperty({
    description: 'List of anime licensors.',
    type: [Licensor],
    required: false,
  })
  licensors: Licensor[];

  @ApiProperty({
    description: 'List of studios worked on anime.',
    type: [Studio],
    required: false,
  })
  studios: Studio[];

  @ApiProperty({
    description: 'Anime source np. Manga.',
    type: String,
    required: false,
    enum: ['Manga', 'Original'],
  })
  source: string;

  @ApiProperty({
    description: 'Anime genres np. Comedy.',
    type: [Genre],
    required: false,
  })
  genres: Genre[];
}
