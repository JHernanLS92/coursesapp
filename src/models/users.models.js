const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Users = db.define("users", {
    id:{ 
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { // validaciones que queremos que haga la db
            isEmail: true,
        }
    }
});

module.exports = Users;