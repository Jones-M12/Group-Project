module.exports = function(sequelize, DataTypes) {
    var Meal= sequelize.define("Meal", {
      
      mealName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
     
    });

    Meal.associate = function(models) {
      console.log(models)
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Meal.belongsTo(models.Foods, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Meal;
  };