import multer from 'multer';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${file.fieldname}-${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
