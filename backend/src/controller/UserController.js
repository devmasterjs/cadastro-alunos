import User from '../model/User';

class UserController {
  async create(request, response) {
    try {
      const newUser = await User.create(request.body);
      return response.json(newUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll();
      if (users) {
        return response.json(users);
      }
      return response.json({ errors: 'Nenhum usuário cadastrado' });
    } catch (e) {
      return response.status(500).json({ errors: 'Ops! Ocorreu um problema. Tente novamente mais tarde!' });
    }
  }

  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);
      if (user) {
        return response.json(user);
      }
      return response.status(400).json({ errors: 'Usuário não encontrado' });
    } catch (e) {
      return response.status(500).json({ errors: 'Ops! Ocorreu um problema. Tente novamente mais tarde!' });
    }
  }

  async update(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({ errors: 'ID não enviado' });
      }

      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({ errors: 'Usuário não encontrado' });
      }

      const updatedUser = await user.update(request.body);
      return response.json(updatedUser);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({ errors: 'ID não enviado' });
      }

      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({ errors: 'Usuário não encontrado' });
      }

      await user.destroy();
      return response.json(user);
    } catch (e) {
      return response.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
