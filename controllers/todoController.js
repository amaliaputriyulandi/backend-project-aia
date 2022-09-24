const db = require("../models")
const Todo = db.todos
const method = {}
const Op = db.Sequelize.Op

method.findAll = async (req, res) => {
    try{
        const name = req.query.name
        var condition = name ? { todoName: {[Op.iLike]: `%${name}%`}}: null
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

method.findOne = async (req, res) => {
    try{
        const id = req.params.id
        const data = await Todo.findOne({where:{id: id}})

        res.send({
            statusCode: 200,
            statusText: "Success",
            message: "Your request for Get One data todo successfully",
            data: data
        })

    }catch(error){
        res.status(500).send(error)
    }
}

method.create = async (req, res) => {
    try{

        const dataReq = req.body
        const newTodo = {
            todoName: dataReq.todoName,
            todoDescription: dataReq.todoDescription,
            todoIsComplete: dataReq.todoIsComplete
        }

        const saveData = await Todo.create(newTodo)

        res.send({
            statusCode: 200,
            statusText: "success",
            message: "Your request for Create todo successfully",
            data: {
                todoName: dataReq.todoName,
                todoDescription: dataReq.todoDescription,
                todoIsComplete: dataReq.todoIsComplete
            }
        })
        
    }catch(error){
        res.status(500).send(error)
    }
}

method.update = async (req, res) => {
    try{
        const id = req.params.id

        let todoDetails = await Todo.findOne({where: {id: id}})

        if(todoDetails == null){
            res.status(404).json({
                statusCode: 404,
                statusText: "No Data Found",
                message: "No Data Found from id Todo",
             });
        }else {
            todoDetails = todoDetails.dataValues
            todoDetails.todoIsComplete = req.body.todoIsComplete
            const dataUpdate = await Todo.update(req.body, {where: {id:id} })
    
            res.send({
                statusCode: 200,
                statusText: "success",
                message: "Your request for update todo successfully"
            })
        }

    }catch(error){
        res.status(500).send(error)
    }
}

method.delete = async (req, res) => {
    try{
        const id = req.params.id

        let todoDetails = await Todo.findOne({where: {id: id}})

        if(todoDetails == null){
            res.status(404).json({
                statusCode: 404,
                statusText: "No Data Found",
                message: "No Data Found from id Todo",
             });
        }else {
            
            await Todo.destroy({where: {id:id} })
    
            res.send({
                statusCode: 200,
                statusText: "success",
                message: "Todo was deleted successfully!"
            })
        }


    }catch(error){
        res.status(500).send(error)
    }
}

module.exports = method