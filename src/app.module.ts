import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.db',
      entities: [__dirname + '/**/*.entity.js'],
      synchronize: true,
    }),
    AnimeModule,
  ],
})
export class AppModule {}
