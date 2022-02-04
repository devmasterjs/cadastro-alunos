import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Photo from '../model/Photo';
import Student from '../model/Student';
import User from '../model/User';

const models = [Student, User, Photo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => {
        if (model.associate) {
          model.associate(this.connection.models);
        }
        return model;
      });
  }
}

export default new Database();
