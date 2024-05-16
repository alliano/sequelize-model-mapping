import { DataTypes, Model } from "sequelize";
import Users from "./UsersModel.js";
import connection from "../db/config/connection.js";

export default class Post extends Model{};
Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
        references: {
            model: Users,
            key: "id",
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false,
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    }
}, {
    tableName: "posts",
    underscored: true,
    sequelize: connection,
});

