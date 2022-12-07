const Sequelize = require ('sequelize')

//conexão banco de dados
const sequelize = new Sequelize ('postapp','root','admin', {
    host: "localhost",
    dialect: "mysql"
})

//exportar o Sequelize e sequelize no mesmo arquivo
//Auxilia pois cada models terá um arquivo individual
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
//primeira letra maiúscula no nome de cada models