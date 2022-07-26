import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AddAnimeDto from './dto/AddAnime.dto';
import EditAnimeDto from './dto/EditAnime.dto';
import Anime from './entity/anime.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  /**
   * It returns a promise of an array of Anime objects, and it uses the find() function of the
   * AnimeRepository to find all Anime objects in the database, and it also includes the relations of
   * the Anime objects
   * @returns An array of Anime objects.
   */
  async findAll(): Promise<Anime[]> {
    return await this.animeRepository.find({
      relations: ['types', 'producers', 'licensors', 'studios', 'genres'],
    });
  }

  /**
   * It finds an anime by id
   * @param {number} id - number - The id of the anime we want to find.
   * @returns The anime with the id that was passed in.
   */
  async findById(id: number): Promise<Anime> {
    try {
      const result = await this.animeRepository.findOneOrFail({
        where: { id },
      });

      return result;
    } catch (err) {
      throw err;
    }
  }

  /**
   * It creates a new anime object from the data passed in, then saves it to the database
   * @param {AddAnimeDto} addAnimeDto - AddAnimeDto
   * @returns The anime object
   */
  async addAnime(addAnimeDto: AddAnimeDto): Promise<Anime> {
    // get anime data
    const anime = await this.animeRepository.create(addAnimeDto);

    // save anime
    return await this.animeRepository.save(anime);
  }

  /**
   * It gets an anime by id, changes the data, and saves the anime
   * @param {number} id - number - the id of the anime to be updated
   * @param {EditAnimeDto} editAnimeDto - AddAnimeDto
   * @returns The updated anime data.
   */
  async updateAnimeData(
    id: number,
    editAnimeDto: EditAnimeDto,
  ): Promise<Anime> {
    // get anime data by id
    let anime = await this.findById(id);

    // change data
    anime = { id, ...editAnimeDto };

    // save anime
    return await this.animeRepository.save(anime);
  }
}
