import { DataTypes, Model } from "sequelize"
import connection from "../db/config/connection.js"
import Users from "./UsersModel.js"
import Skill from "./SkillModel.js"
export default class UserSkill extends Model{}
UserSkill.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: Users,
            key: "id"
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },
    skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: Skill,
            key: "id"
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT"
    }
}, {
    sequelize: connection,
    tableName: "users_skill",
    underscored: true
})