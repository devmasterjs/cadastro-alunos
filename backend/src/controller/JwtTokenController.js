class JwtTokenController {
  create(req, res) {
    console.log(req.body);
    return res.json('OK');
  }
}

export default new JwtTokenController();
