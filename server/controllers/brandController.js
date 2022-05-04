const { Brand } = require('../db/models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    try {
      const brand = await Brand.create({ name });
      return res.json({ brand });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new BrandController();
