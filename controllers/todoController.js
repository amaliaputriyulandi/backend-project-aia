const db = require("../models")
const Todo = db.todos
const method = {}
const Op = db.Sequelize.Op

method.findAll = async (req, res) => {
    try{
        const name = req.query.name
        var condition = name ? { todoName: {[Op.iLike]: `%${name}`}}: null

        const data = await Todo.findAll({where: condition})

        res.send({
            statusCode: 200,
            statusText: "Success",
            message: "Your request for Get All data todo successfully",
            data: data
        })

    }catch(error){
        res.status(500).send(error)
    }
}

method.create = async (req, res) => {
    try{


    }catch(error){

    }
}

module.exports = method