import { DataTypes, Model } from "sequelize"
import connection from "../../db/config/connection.js"
export default class mahasiswa extends Model{}
mahasiswa.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: connection,
    tableName: "mahasiwa",
    underscored: true,
    indexes:[
        {
            fields: ["email"],
            unique: true
        }
    ]
})