// data for testing
import { animeData } from './animeDataForTests';

export const mockAnimeService = {
  findAll: jest.fn().mockImplementation(() => {
    return animeData;
  }),

  findByName: jest.fn().mockImplementation((name: string) => {
    return animeData.find(
      (anime) =>
        typeof anime.title.search(name) !== null ||
        typeof anime.title.search(name) !== undefined,
    );
  }),

  findById: jest.fn().mockImplementation((id: number) => {
    return animeData[id];
  }),

  addAnime: jest.fn().mockImplementation((dto) => {
    return {
      id: expect.any(Number),
      ...dto,
    };
  }),

  updateAnimeData: jest.fn().mockImplementation((id, dto) => {
    return {
      id: id,
      ...dto,
    };
  }),

  deleteAnime: jest.fn().mockImplementation((id) => {
    return animeData[id];
  }),
};
