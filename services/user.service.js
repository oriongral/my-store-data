const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    try {
      const user = await this.findOne(id);
      const rta = await user.update(changes);
      return rta;
    } catch (error) {
      throw boom.notFound('User not found');
    }
  }

  async delete(id) {
    try {
      const user = await this.findOne(id);
      await user.destroy();
      return { id };
    } catch (error) {
      throw boom.notFound('User not found');
    }
  }
}

module.exports = UserService;
