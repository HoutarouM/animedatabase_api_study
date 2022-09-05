// data for testing
import { animeData } from './animeDataForTests';

export const mockAnimeService = {
  findAll: jest.fn().mockImplementation(() => {
    return animeData;
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
