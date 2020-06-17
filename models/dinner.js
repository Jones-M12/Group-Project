module.exports = function(sequelize, DataTypes) {
    var Dinner = sequelize.define("Dinner", {
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
    return Dinner;
  };