class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
      mensagem: 'Olá Mundo!',
    });
  }
}

export default new HomeController();
