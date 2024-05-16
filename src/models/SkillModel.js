import { DataTypes, Model } from "sequelize";
import connection from "../db/config/connection.js";
export default class Skill extends Model{}
Skill.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    lisence: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
},{
    tableName: "skills",
    underscored: true,
    sequelize: connection,
    indexes: [
        {
            fields: ["id", "name"],
            unique: true
        }
    ]
})