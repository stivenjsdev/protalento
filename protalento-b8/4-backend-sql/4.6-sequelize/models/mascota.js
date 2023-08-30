'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mascota.init({
    nombre: DataTypes.STRING,
    especie: DataTypes.STRING,
    id_client: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mascota',
  });
  return Mascota;
};