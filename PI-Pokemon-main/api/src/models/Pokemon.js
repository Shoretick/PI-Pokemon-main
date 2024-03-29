const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {

    createdInDB:{ 
      type: DataTypes.BOOLEAN,
      default: false, 
      defaultValue: true

  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },

  hp: {
    type: DataTypes.INTEGER,
    
  },

  attack: {
    type: DataTypes.INTEGER
  },

  defense:{
    type: DataTypes.INTEGER
  },

  img: {
    type: DataTypes.STRING
  },

  speed: {
    type: DataTypes.INTEGER
  },

  height: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.STRING
  },
  
  });
};
