import Student from '../model/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Devmaster',
      lastname: 'Programmer Hero',
      email: 'devmaster@programmerhero.com.br',
      age: 21,
      weight: 99,
      height: 1.67,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
