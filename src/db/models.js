const Sequelize= require('sequelize')

const db=new Sequelize({
    dialect : 'mysql',
    database : 'socialmediadb',
    username : 'socialuser',
    password : 'pass',
})

const Id_Def={
    type:Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
}

const Username_Def={
    type:Sequelize.DataTypes.STRING(15),
    unique:true,
    allowNull: false,
}

const Title_Def={
    type:Sequelize.DataTypes.STRING(100),
    allowNull: false,
}


const Users = db.define('user', {
    id:Id_Def,
    username: Username_Def,
})

const Posts = db.define('post', {
  id: Id_Def,
  title: Title_Def,
  body: {
    type:Sequelize.DataTypes.TEXT,
    allowNull: false,
  },
})

const Comments = db.define('comment', {
  id: Id_Def,
  title: Title_Def,
  body: {
    type: Sequelize.DataTypes.TEXT,
  },
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports = {
  db,
  Users,
  Posts,
  Comments,
}