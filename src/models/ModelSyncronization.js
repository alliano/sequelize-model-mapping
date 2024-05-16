import Users from "./UsersModel.js";
import Addresses from "./AddressModel.js";
import connection from "../db/config/connection.js";
import Post from "./PostModel.js";
import Comments from "./CommentsModel.js";
import PostImage from "./PostImageModel.js";
import Skill from "./SkillModel.js";
import UserSkill from "./UserSkillModel.js";
import mahasiswa from "./mahasiswa/mahasiswa_model.js";
import m_addresses from "./mahasiswa/address.js";
import program_study from "./mahasiswa/program_study.js";
import fakultas from "./mahasiswa/fakultas_model.js";
import mata_kuliah from "./mahasiswa/matakuliah_model.js";

// define assiciations for mahasiswa
// one to one relationship between mahasiswa x m_address
// it mean one mahasiswa can only have one m_addreess
mahasiswa.hasOne(m_addresses, {
    foreignKey: {
        allowNull: false,
        field: "mahasiswa_id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
m_addresses.belongsTo(mahasiswa);

program_study.hasMany(mahasiswa, {
    foreignKey: {
        field: "program_study_id",
        allowNull: false
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
mahasiswa.belongsTo(program_study);

fakultas.hasMany(program_study, {
    foreignKey: {
        field: "fakultas_id",
        allowNull: false
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
program_study.belongsTo(fakultas);

mahasiswa.belongsToMany(mata_kuliah, {
    through: "mahasiswa_matakuliah",
    targetKey: "id",
    timestamps: false
})
mata_kuliah.belongsToMany(mahasiswa, {
    through: "mahasiswa_matakuliah",
    targetKey: "id",
    timestamps: false
});
async function sync() {
    try{
        await connection.sync({
            alter: true
        });
        console.log("Database successfuly sync...");
    }catch(err) {
        console.log("Database failed sync...");
        console.log(err);
    }
}
sync();
export { Users, Addresses, Post, Comments, PostImage, Skill, UserSkill, connection, mahasiswa, m_addresses }