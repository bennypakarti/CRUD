const db = require('../config')

exports.getAgent = (response) => {
    //query data
    const sql = "SELECT * FROM `agent` "

    //execute
    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
    
    //response data
    const agents = {
        title: "VALORANT-AGENT-LIST",
        data: JSON.parse(JSON.stringify(result))
    } 
    response.render('index', { agents })
    response.end()
    })
}

exports.getAgentById = (id, response) => {
    const sql = `SELECT * FROM agent WHERE id = ${id}`
    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)

        const agent = {
            title: "DATA AGENT BY ID",
            data: JSON.parse(JSON.stringify(result))
        }
        console.log('agent => ',agent);
        response.render('detailAgent', { agent })
        response.end()
    })
}

exports.updateAgentById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role

    const sql = `UPDATE agent SET name = '${name}', role = '${role}' WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error', error)
        response.redirect('/agent')
        response.end()
    })
}

exports.addAgent = (data, response) => {
    const name = data.name
    const role = data.role
    const sql = `INSERT INTO agent (name, role) VALUES ('${name}', '${role}')`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/agent')
        response.end()
    })

}

exports.removeAgent = (id, response) => {
    const sql = `DELETE FROM agent WHERE id='${id}' `

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/agent')
        response.end()
    })

}