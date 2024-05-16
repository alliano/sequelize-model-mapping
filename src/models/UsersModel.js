import { DataTypes, Model } from "sequelize";
import connection from "../db/config/connection.js"
export default class Users extends Model{};
Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    lastName: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    sequelize: connection,
    tableName: "users",
    underscored: true
});