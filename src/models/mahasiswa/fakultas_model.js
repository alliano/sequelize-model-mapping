import { DataTypes, Model } from "sequelize";
import connection from "../../db/config/connection.js"
export default class fakultas extends Model{}
fakultas.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    sequelize: connection,
    tableName: "program_study",
    underscored: true
})