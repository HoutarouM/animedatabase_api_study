import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AnimeService } from './anime.service';
import Anime from './entity/anime.entity';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  async findAll(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return this.animeService.findById(id);
  }
}
