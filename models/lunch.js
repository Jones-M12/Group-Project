module.exports = function(sequelize, DataTypes) {
    var Lunch = sequelize.define("Lunch", {
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
    return Lunch;
  };