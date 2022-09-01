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

export default class AddAnimeDto {
  @ApiProperty({
    description: 'Anime title.',
    type: String,
    nullable: false,
  })
  @Length(10, 50)
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Alternative anime title.',
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @Length(10, 50)
  @IsOptional()
  alternative_title?: string;

  @ApiProperty({
    description: 'Japanese anime title.',
    type: String,
    nullable: false,
  })
  @IsString()
  @Length(10, 50)
  @IsNotEmpty()
  japanese_title: string;

  @ApiProperty({
    description: 'Anime type np. TV series, Film and so on.',
    type: Type,
    nullable: false,
  })
  @IsNotEmpty()
  @IsObject()
  type: Type;

  @ApiProperty({
    description: 'Count of episodes',
    type: Number,
    nullable: true,
    required: false,
  })
  @IsInt()
  @IsOptional()
  episodes?: number;

  @ApiProperty({
    description: 'Duration of episode or film.',
    type: Number,
    nullable: true,
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
    nullable: false,
  })
  @IsArray()
  @IsNotEmpty()
  producers: Producer[];

  @ApiProperty({
    description: 'List of anime licensors.',
    type: [Licensor],
    nullable: false,
  })
  @IsArray()
  @IsNotEmpty()
  licensors: Licensor[];

  @ApiProperty({
    description: 'List of studios worked on anime.',
    type: [Studio],
    nullable: false,
  })
  @IsArray()
  @IsNotEmpty()
  studios: Studio[];

  @ApiProperty({
    description: 'Anime source np. Manga.',
    type: String,
    nullable: false,
    enum: ['Manga', 'Original'],
  })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({
    description: 'Anime genres np. Comedy.',
    type: [Genre],
    nullable: false,
  })
  @IsArray()
  @IsNotEmpty()
  genres: Genre[];

  @ApiProperty({
    description: 'Title description.',
    type: String,
    nullable: true,
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
