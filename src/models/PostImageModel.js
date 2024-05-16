import { DataTypes, Model } from "sequelize";
import Post from "./PostModel.js";
import connection from "../db/config/connection.js";

export default class PostImage extends Model{};
PostImage.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    imageName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            key: "id",
            model: Post,
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }
}, {
    sequelize: connection,
    tableName: "post_image",
    underscored: true
});