// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    /* db.Foods gives access to the Foods model */
  // GET route for getting all of the Foods
    app.get("/api/foods/:id", (req, res) => {
        db.Foods.findOne({
            where: {
              id: req.params.id
            },            
          }).then(function(dbFood) {
            res.json(dbFood);
          });      
    });
  
     
    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/foods", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
        db.Foods.update({
            foodName: req.body.foodName,
            measurment: req.body.measurment,
            unitOfMeasurment: req.body.unitOfMeasurment,
            calories: req.body.calories            
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbFood) {
        res.json(dbFood);
        });
    });
  
    //Route to delete an item
    app.delete("/api/foodss/:id", function(req, res) {
        db.Food.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbFood) {
          res.json(dbFood);
        });
      });
  };