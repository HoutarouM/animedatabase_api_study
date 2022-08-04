import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

// entities
import Anime from './entity/anime.entity';

// services
import { AnimeService } from './anime.service';

// dtos
import AddAnimeDto from './dto/AddAnime.dto';
import EditAnimeDto from './dto/EditAnime.dto';

@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  async findAll(): Promise<Anime[]> {
    return await this.animeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return await this.animeService.findById(id);
  }

  @Post()
  async addAnime(@Body() addAnimeDto: AddAnimeDto): Promise<Anime> {
    return await this.animeService.addAnime(addAnimeDto);
  }

  @Put(':id')
  async updateAnimeData(
    @Param('id', ParseIntPipe) id: number,
    @Body() editAnimeDto: EditAnimeDto,
  ): Promise<Anime> {
    return await this.animeService.updateAnimeData(id, editAnimeDto);
  }

  @Delete(':id')
  async deleteAnime(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return await this.animeService.deleteAnime(id);
  }
}
