import { DataTypes, Model } from "sequelize";
import Users from "./UsersModel.js";
import connection from "../db/config/connection.js";
import Post from "./PostModel.js";

export default class Comments extends Model{};
Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: Users,
            key: "id"
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: Post,
            key: "id"
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    }
}, {
    sequelize: connection,
    tableName: "comments",
    underscored: true
});