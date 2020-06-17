module.exports = function(sequelize, DataTypes) {
    var Snack = sequelize.define("Snack", {
      foodName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      calorieAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
     
    });
    return Snack;
  };