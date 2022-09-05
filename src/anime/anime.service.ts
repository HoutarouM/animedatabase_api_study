import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

// entities
import Anime from './entity/anime.entity';

// dtos
import AddAnimeDto from './dto/AddAnime.dto';
import EditAnimeDto from './dto/EditAnime.dto';

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
    try {
      return await this.animeRepository.find({
        relations: ['type', 'producers', 'licensors', 'studios', 'genres'],
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * It returns an array of Anime objects that have a title that contains the name parameter
   * @param {string} name - string - The name of the anime you want to search for.
   * @returns An array of Anime objects
   */
  async findByName(name: string): Promise<Anime[]> {
    try {
      return await this.animeRepository.find({
        where: [{ title: Like('%' + name + '%') }],
        relations: ['type', 'producers', 'licensors', 'studios', 'genres'],
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * It finds an anime by id
   * @param {number} id - number - The id of the anime we want to find.
   * @returns The anime with the id that was passed in.
   */
  async findById(id: number): Promise<Anime> {
    try {
      return await this.animeRepository.findOneOrFail({
        where: { id },
        relations: ['type', 'producers', 'licensors', 'studios', 'genres'],
      });
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
    try {
      // get anime data
      const anime = await this.animeRepository.create(addAnimeDto);

      // save anime
      return await this.animeRepository.save(anime);
    } catch (err) {
      throw err;
    }
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
    try {
      // get anime data by id
      let anime = await this.findById(id);

      // change data
      anime = { id, ...editAnimeDto };

      // save anime
      return await this.animeRepository.save(anime);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Find an anime by id, remove it, and return the data about them
   * @param {number} id - number - the id of the anime to be deleted
   * @returns The anime that was deleted.
   */
  async deleteAnime(id: number): Promise<Anime> {
    try {
      // find anime by id
      const anime = await this.findById(id);

      // remove anime and return data
      return this.animeRepository.remove(anime);
    } catch (err) {
      throw err;
    }
  }
}
