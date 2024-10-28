const Recipe = require('../models/Recipe');

module.exports = {
  async getAll(req, res) {
    const data = await Recipe.findAll();
    res.json(data);
  },
  async create(req, res) {
    const new_data = await Recipe.create(req.body);
    res.json(new_data);
  },
}