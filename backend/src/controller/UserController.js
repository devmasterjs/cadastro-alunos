import User from '../model/User';

class UserController {
  async create(request, response) {
    const newUser = await User.create({
      name: 'Devmaster',
      email: 'devmaster@programmerhero.com.br',
      password: 'devmaster@123',
    });
    response.json(newUser);
  }
}

export default new UserController();
