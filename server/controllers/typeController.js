const { Type } = require('../db/models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    try {
      const type = await Type.create({ name });
      return res.json({ type });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new TypeController();
