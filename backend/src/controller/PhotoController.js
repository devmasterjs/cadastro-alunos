import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../model/Photo';
import Student from '../model/Student';

const uploadMiddleware = multer(multerConfig).single('photo');

class PhotoController {
  async store(req, res) {
    return uploadMiddleware(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const studentId = req.body.student_id;
        const student = await Student.findByPk(studentId);

        if (!student) {
          return res.status(400).json({
            errors: ['Aluno não existe'],
          });
        }

        const { originalname, filename } = req.file;
        const photo = await Photo.create({ originalname, filename, student_id: studentId });
        return res.json(photo);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new PhotoController();
