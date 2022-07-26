import { ApiProperty } from '@nestjs/swagger';
import Genre from '../entity/genre.entity';
import Licensor from '../entity/licensor.entity';
import Producer from '../entity/producer.entity';
import Studio from '../entity/studio.entity';
import Type from '../entity/type.entity';

export default class AddAnimeDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  alternative_title: string;

  @ApiProperty()
  japanese_title: string;

  @ApiProperty()
  types: Type[];

  @ApiProperty()
  episodes: number;

  @ApiProperty()
  aired_from?: Date;

  @ApiProperty()
  aired_to?: Date;

  @ApiProperty()
  producers: Producer[];

  @ApiProperty()
  licensors: Licensor[];

  @ApiProperty()
  studios: Studio[];

  @ApiProperty()
  source: string;

  @ApiProperty()
  genres: Genre[];
}
