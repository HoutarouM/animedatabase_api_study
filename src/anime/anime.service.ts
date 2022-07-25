import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Anime from './entity/anime.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  async findAll(): Promise<Anime[]> {
    return await this.animeRepository.find({
      relations: ['types', 'producers', 'licensors', 'studios', 'genres'],
    });
  }
}
