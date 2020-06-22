--Specifies the Database to insert information into
USE myfoodfriend;

CREATE TABLE foods (
  id INT NOT NULL AUTO_INCREMENT,
  foodName VARCHAR(45) NOT NULL,
  measurment INT NULL,
  unitOfMeasurment VARCHAR(10) NULL
  calories INT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO smoothies
(foodName, measurment, unitOfMeasurment, calories);
VALUES
("Banana", 1, "md", 110),
("Avocado", 1, "md", 160),
("Strawberries", 1, "cup", 80),
("Kiwi", 1, "sm", 46),
("Blueberries", 1, "cup", 85),
("Bacon", 1, "qty" 70),
("Tbone Steak", 5, "oz", 350),
("Beyond Burger", 4, "oz", 260),
("Cheddar Sausage", 1, 80),
("Grounded Turkey", 4, "oz", 80),
("Broccoli", 1, "cup", 60),
("Spinach", 2, "cup", 14),
("Baby Carrots", 6, "oz", 70),
("Asparagus", 8, "0z", 45),
("Sharp Cheddar Cheese", 1, "slice", 80),
("Swiss Cheese", 1, "slice", 70),
("Provolone Cheese", 1, "slice", 80),
("Whole Grain Bread", 1, "slice", 50),
("Wheat Bread", 1, "slice", 70),
("White Bread", 1, "slice", 70),
("Water", 8, "oz", 0),
("Lemonade", 8, "oz", 120),
("Pepsi", 20, "oz", 210),
("BLT Sandwich", 690),
("Turkey Sandwich", 300),
("BBQ Chicken Sandwich", 260),
("Buffalo Chicken Sandwich", 480),
("BLT Sandwich", 690),
("Dirty Rice", 1, "cup", 201),
("Jasmine Rice", 1, "cup", 480),
("Wild Rice", 1, "cup", 142),
("Caramel Rice Cake", 1, 50),
("Blueberry Protein Muffin", 1, 117),
("Skinny Pop Popcorn Sweet & Salty", 1, "cup", 56),
("Strawberry Banana Yogurt w/ Fruit on Bottom", 8, "oz", 150),
("Mixed Berry Yogurt", 8, "oz", 60),
("Cherry Yogurt", 8, "oz", 80),



