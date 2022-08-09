import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

// entities
import Anime from './entity/anime.entity';

// services
import { AnimeService } from './anime.service';

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

  // TODO: refactor filename
  @Put(':id/upload/poster')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/posters',
        filename: (req, file, cb) => {
          // generate unique id
          const uniqueId = Date.now();

          // get file extension name
          const ext = extname(file.originalname);

          // create filename with unique id and original extension
          const filename = `${uniqueId}${ext}`;

          // return filename with callback
          cb(null, filename);
        },
      }),
    }),
  )
  async uploadAnimePoster(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    // create dto object
    const animeData: EditAnimeDto = new EditAnimeDto();

    // save poster path
    animeData.poster_path = '/poster/' + file.filename;

    // update data
    return await this.updateAnimeData(id, animeData);
  }

  @Delete(':id')
  async deleteAnime(@Param('id', ParseIntPipe) id: number): Promise<Anime> {
    return await this.animeService.deleteAnime(id);
  }
}
