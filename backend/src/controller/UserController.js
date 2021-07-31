import User from '../model/User';

class UserController {
  async create(request, response) {
    try {
      const newUser = await User.create(request.body);
      response.json(newUser);
    } catch (e) {
      response.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
