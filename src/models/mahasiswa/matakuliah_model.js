import { DataTypes, Model } from "sequelize";
import connection from "../../db/config/connection.js"

export default class mata_kuliah extends Model{};
mata_kuliah.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
},{
    sequelize: connection,
    tableName: "mata_kuliah",
    underscored: true,
    indexes: [
        {
            fields: ["code", "name"],
            unique: true
        }
    ]
})