module.exports = function(sequelize, DataTypes) {
    var Breakfast = sequelize.define("Breakfast", {
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
    return Breakfast;
  };