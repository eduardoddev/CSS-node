const db = require('./db')

const Post1 = db.sequelize.define('postagens', {

    album: {
        type: db.Sequelize.STRING
    },
    artista: {
        type: db.Sequelize.TEXT
    },
    genero: {
        type: db.Sequelize.TEXT
    },
    ano: {
        type: db.Sequelize.TEXT
    }
})

//Post1.sync({force:true}) //executar uma única vez e depois apagar ou comentar
module.exports = Post1  //acesso o model post através de outros arquivos