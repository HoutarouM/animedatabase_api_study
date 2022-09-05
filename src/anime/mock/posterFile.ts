import { Readable } from 'typeorm/platform/PlatformTools';

export default class MockPosterFile implements Express.Multer.File {
  filename: string;
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  stream: Readable;
  destination: string;
  path: string;
  buffer: Buffer;
}
