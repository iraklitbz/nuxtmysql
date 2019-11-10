import Sequelize from 'sequelize'

const sequelize = new Sequelize('test', 'root', '', {
    dialect: 'mysql'
})

export default async function (req, res, next) {
    const result = await sequelize.query(`INSERT INTO names (name) VALUES ('${req.body.name}')`, { 
        type: sequelize.QueryTypes.INSERT 
    })
    
    res.json(result)
}