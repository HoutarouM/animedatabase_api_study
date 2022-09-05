import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

// entities
import Anime from './entity/anime.entity';

// services
import { AnimeService } from './anime.service';

// image settings
import { posterSettings } from './poster.image';

// dtos
import AddAnimeDto from './dto/AddAnime.dto';
import EditAnimeDto from './dto/EditAnime.dto';

@ApiTags('anime')
@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  async findAll(): Promise<Anime[]> {
    return await this.animeService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Anime[]> {
    if (name.length < 4) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Name must be at least 4 characters long.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.animeService.findByName(name);
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

  @Put(':id/upload/poster')
  @UseInterceptors(FileInterceptor('file', posterSettings))
  async uploadAnimePoster(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    // create dto object
    const animeData: EditAnimeDto = new EditAnimeDto();

    // save poster path
    animeData.poster_path = '/posters/' + file.filename;

    // update data
    return await this.updateAnimeData(id, animeData);
  }

  @Delete(':id')
  async deleteAnime(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return await this.animeService.deleteAnime(id);
  }
}
