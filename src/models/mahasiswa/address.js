import { DataTypes, Model } from "sequelize";
import connection from "../../db/config/connection.js";
export default class m_addresses extends Model{}
m_addresses.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    },
    province: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    },
    vilage: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    }
},{
    sequelize: connection,
    tableName: "m_addresses",
    underscored: true
})