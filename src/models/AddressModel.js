import { DataTypes, Model } from "sequelize";
import connection from "../db/config/connection.js";
import Users from "./UsersModel.js";
export default class Addresses extends Model{};
Addresses.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: Users,
            key: "id"
        }
    },
    country: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    province: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    vilage: {
        allowNull: true,
        type: DataTypes.STRING(100)
    }
}, {
    sequelize: connection,
    tableName: "addresses",
    underscored: true
});