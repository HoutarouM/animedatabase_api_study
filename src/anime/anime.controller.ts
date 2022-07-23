import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import Anime from './entity/anime.entity';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  findAll(): Promise<Anime[]> {
    return this.animeService.findAll();
  }
}
