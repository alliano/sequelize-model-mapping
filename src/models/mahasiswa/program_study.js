import { DataTypes, Model } from "sequelize";
import connection from "../../db/config/connection.js";
export default class program_study extends Model{}
program_study.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
},{
    sequelize: connection,
    tableName: "program_study",
    underscored: true,
    indexes: [
        {
            fields: ["code", "name"],
            unique: true
        }
    ]
})