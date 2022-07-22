import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import AnimeEntity from './entity/anime.entity';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  findAll(): Promise<AnimeEntity[]> {
    return this.animeService.findAll();
  }
}
