import { Test, TestingModule } from '@nestjs/testing';

// controllers
import { AnimeController } from './anime.controller';

// services
import { mockAnimeService } from './mock/anime.service';
import { AnimeService } from './anime.service';

// dtos
import AddAnimeDto from './dto/AddAnime.dto';
import { mockAddAnimeDto } from './mock/mockAddAnime.dto';
import EditAnimeDto from './dto/EditAnime.dto';
import { mockEditAnimeDto } from './mock/mockEditAnime.dto';

// data for testing
import { animeData } from './mock/animeDataForTests';
import MockPosterFile from './mock/posterFile';

describe('AnimeController', () => {
  let animeController: AnimeController;

  // dtos for testing
  const addDto: AddAnimeDto = mockAddAnimeDto;
  const editDto: EditAnimeDto = mockEditAnimeDto;

  // file for testing
  const file: MockPosterFile = new MockPosterFile();
  file.filename = 'test';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeController],
      providers: [
        {
          provide: AnimeService,
          useValue: mockAnimeService,
        },
      ],
    }).compile();

    animeController = module.get<AnimeController>(AnimeController);
  });

  it('should be defined', () => {
    expect(animeController).toBeDefined();
  });

  describe('find data', () => {
    it('should return an array of anime objects', async () => {
      // expect that animeController finds all return anime data
      expect(await animeController.findAll()).toEqual(animeData);

      // expect that mock service will be called
      expect(mockAnimeService.findAll).toHaveBeenCalled();
    });

    it('should return an anime object by provided id', async () => {
      // expect that anime controller find by id return anime data item id as index
      expect(await animeController.findById(0)).toEqual(animeData[0]);

      // expect that anime service will be called with 0 as id
      expect(mockAnimeService.findById).toHaveBeenCalledWith(0);
    });

    // TODO: test find by name
  });

  describe('add(create) anime', () => {
    it('should create a new anime', async () => {
      // expect that anime object will be created with any number id and other data from dto
      expect(await animeController.addAnime(addDto)).toEqual({
        id: expect.any(Number),
        ...addDto,
      });

      // expect that anime service will be called with addDto
      expect(mockAnimeService.addAnime).toHaveBeenCalledWith(addDto);
    });
  });

  describe('update anime', () => {
    it('should update anime data', async () => {
      // expect that anime object will be found by id and update by data from dto
      expect(await animeController.updateAnimeData(5, editDto)).toEqual({
        id: 5,
        ...editDto,
      });

      // expect that anime service will be called with anime id and data from dto
      expect(mockAnimeService.updateAnimeData).toHaveBeenCalledWith(5, editDto);
    });

    it('should update anime poster and data', async () => {
      // anime poster file path
      const file_path = '/posters/' + file.filename;

      // create edit data dto and save poster path
      const posterUpdateDto: EditAnimeDto = new EditAnimeDto();
      posterUpdateDto.poster_path = file_path;

      // expect that anime object will be found by id and update by data from dto
      expect(await animeController.uploadAnimePoster(1, file)).toEqual({
        id: 1,
        poster_path: file_path,
      });

      // expect that anime service will be called with anime id and data from dto
      expect(mockAnimeService.updateAnimeData).toHaveBeenCalledWith(
        1,
        posterUpdateDto,
      );
    });
  });

  describe('delete anime', () => {
    it('should delete anime', async () => {
      // expect that anime object will be deleted by id
      expect(await animeController.deleteAnime(0)).toEqual(animeData[0]);

      // expect that anime service will be called with anime id
      expect(mockAnimeService.deleteAnime).toHaveBeenCalledWith(0);
    });
  });
});
