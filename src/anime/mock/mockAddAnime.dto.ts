import AddAnimeDto from '../dto/AddAnime.dto';
import Genre from '../entity/genre.entity';
import Licensor from '../entity/licensor.entity';
import Producer from '../entity/producer.entity';
import Studio from '../entity/studio.entity';
import Type from '../entity/type.entity';

export const mockAddAnimeDto: AddAnimeDto = {
  title: 'Anime title',

  alternative_title: 'Anime alternative title',

  japanese_title: 'Anime japanese title',

  type: new Type(),

  episodes: 25,

  duration: 200,

  aired_from: new Date(),

  aired_to: new Date(),

  producers: [new Producer()],

  licensors: [new Licensor()],

  studios: [new Studio()],

  source: 'Manga',

  genres: [new Genre()],

  description: 'Anime description.',
};
