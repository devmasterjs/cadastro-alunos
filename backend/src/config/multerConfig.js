import multer from 'multer';
import { extname, resolve } from 'path';
import appConfig from './appConfig';

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('O arquivo precisa ser do tipo PNG ou JPG.'));
    }
    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(process.env.STATIC_DIR, 'uploads', appConfig.imageFolder));
    },
    filename: (req, file, callback) => {
      callback(null, `${file.fieldname}-${Date.now()}${extname(file.originalname)}`);
    },
  }),
};
