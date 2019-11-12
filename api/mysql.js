import Sequelize from 'sequelize'

const sequelize = new Sequelize('guests', 'root', '', {
    dialect: 'mysql'
})

export default async function (req, res, next) {
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)
    console.log(Object.values(req.body))
    let parsedValues = []

    values.map(item => {
        parsedValues.push(typeof item === 'string' ? `'${item}'`: item)
    })

    try {
        const result = await sequelize.query(`INSERT INTO guests (${fields.join(',')}) VALUES (${parsedValues.join(',')})`, { 
            type: sequelize.QueryTypes.INSERT 
        })
        
        res.json(result)
    }
    
    catch (e) {
        res.json(e)
    }
    
}