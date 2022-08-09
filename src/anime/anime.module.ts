import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';
import AnimeEntity from './entity/anime.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimeEntity]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
