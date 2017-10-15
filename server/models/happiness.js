module.exports = (sequelize, DataTypes) => {
  const Happiness = sequelize.define('Happiness', {
    happy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  
  Happiness.associate = (models) => {
	  Happiness.belongsTo(models.Users, {
	      foreignKey: 'userId',
	      onDelete: 'CASCADE',
	    });
	  };
  return Happiness;
};