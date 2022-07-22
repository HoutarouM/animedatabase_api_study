import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AnimeEntity from './entity/anime.entity';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(AnimeEntity)
    private animeRepository: Repository<AnimeEntity>,
  ) {}

  async findAll(): Promise<AnimeEntity[]> {
    return await this.animeRepository.find();
  }
}
