import Sequelize from 'sequelize'
import sendMail from './email'

const sequelize = new Sequelize('guests', 'root', 'Hubits12345', {
    dialect: 'mysql'
})

export default async function (req, res, next) {
    const fields = Object.keys(req.body)
    const values = Object.values(req.body)
    
    let parsedValues = []

    values.map(item => {
        parsedValues.push(typeof item === 'string' ? `'${item}'`: item)
    })

    try {
        const result = await sequelize.query(`INSERT INTO guests (${fields.join(',')}) VALUES (${parsedValues.join(',')})`, { 
            type: sequelize.QueryTypes.INSERT 
        })
        
        if (Array.isArray(result)) {
            sendMail(req.body)
        }

        res.json(result)
    }
    
    catch (e) {
        res.json(e)
    }
    
}