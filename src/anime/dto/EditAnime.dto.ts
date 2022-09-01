import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

// entities
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
  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Alternative anime title.',
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  @IsOptional()
  alternative_title: string;

  @ApiProperty({
    description: 'Japanese anime title.',
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @Length(10, 50)
  @IsOptional()
  japanese_title: string;

  @ApiProperty({
    description: 'Path to the anime poster image.',
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  poster_path?: string;

  @ApiProperty({
    description: 'Anime type np. TV series, Film and so on.',
    type: Type,
    required: false,
  })
  @IsObject()
  @IsOptional()
  type: Type;

  @ApiProperty({
    description: 'Count of episodes',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  episodes?: number;

  @ApiProperty({
    description: 'Duration of episode or film.',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  duration?: number;

  @ApiProperty({
    description: 'Date anime aired from.',
    type: Date,
    nullable: true,
    required: false,
  })
  @IsDate()
  @IsOptional()
  aired_from?: Date;

  @ApiProperty({
    description: 'Date anime aired to.',
    type: Date,
    nullable: true,
    required: false,
  })
  @IsDate()
  @IsOptional()
  aired_to?: Date;

  @ApiProperty({
    description: 'List of anime producers.',
    type: [Producer],
    required: false,
  })
  @IsArray()
  @IsOptional()
  producers: Producer[];

  @ApiProperty({
    description: 'List of anime licensors.',
    type: [Licensor],
    required: false,
  })
  @IsArray()
  @IsOptional()
  licensors: Licensor[];

  @ApiProperty({
    description: 'List of studios worked on anime.',
    type: [Studio],
    required: false,
  })
  @IsArray()
  @IsOptional()
  studios: Studio[];

  @ApiProperty({
    description: 'Anime source np. Manga.',
    type: String,
    required: false,
    enum: ['Manga', 'Original'],
  })
  @IsString()
  @IsOptional()
  source: string;

  @ApiProperty({
    description: 'Anime genres np. Comedy.',
    type: [Genre],
    required: false,
  })
  @IsArray()
  @IsOptional()
  genres: Genre[];

  @ApiProperty({
    description: 'Title description.',
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
