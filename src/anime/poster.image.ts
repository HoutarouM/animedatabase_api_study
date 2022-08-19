import { diskStorage } from 'multer';
import { extname } from 'path';

export const posterSettings = {
  storage: diskStorage({
    destination: './uploads/posters',
    filename: (req, file, cb) => {
      // generate unique id
      const uniqueId: number = Date.now();

      // get file extension name
      const ext: string = extname(file.originalname);

      // create filename with unique id and original extension
      const filename: string = uniqueId + ext;

      // return filename with callback
      cb(null, filename);
    },
  }),
  fileFilter: (req, file, cb) => {
    // check file for being image
    const allowedExtensions = ['/image/png', 'image/jpeg', 'image/jpg'];

    allowedExtensions.includes(file.mimetype)
      ? cb(null, true)
      : cb(null, false);
  },
};
