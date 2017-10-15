module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING , 
    cookie: { type: DataTypes.STRING, allowNull: true,},
  });
  
  Users.associate = (models) => {
	    Users.hasMany(models.Happiness, {
	      foreignKey: 'userId',
	      as: 'happiness',
	    });
  };
  return Users;
};