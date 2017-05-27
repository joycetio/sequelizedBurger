# HW-sequelizedBurger
In this assignment, I'm remaking the Burger app I made last week using Sequelize.

# Live Heroku Link: 
https://sequelized-jt-burger.herokuapp.com/

# Instructions/Code Examples: 
## Sequelized!
Remove all references to vanilla MySQL queries and replace them with Sequelize queries. 
* Replace MySQL Burger model with a sequelized equivalent.
````
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    date: {
      type: DataTypes.DATE,
    }
  });
  return Burger;
};
````
* Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs. 
* Don't forget to sync the models. 
* Edit your new config.json file to include your database configurations. 
````
{
  "development": {
    "username": "root",
    "password": null,
    "database": "sequelized_burger",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
````
* Remove vanilla MySQL ORM file, and replace those references with Sequelize's ORM methods. 

# Technologies Used: 
* Sequelize
* Sequel Pro
* Express
* Node
* CLI
* NPM Packages
* Handlebars.js

