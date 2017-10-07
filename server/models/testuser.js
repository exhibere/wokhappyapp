'use strict';
module.exports = (sequelize, DataTypes) => {
  var testuser = sequelize.define('testuser', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return testuser;
};