const Joi = require("joi")
const validate = {}

validate.createTodo = async (req, res) => {
    try{
        console.log("ss", req.body)
        const Schema = Joi.object({
            todoName: Joi.string().require(),
            todoDescription: Joi.string().require(),
            todoIsComplete: Joi.boolean()
        }).options({abortEarly: false})
        console.log(Schema)

        const {value, error} = await Schema.validate(req.body)
        console.log(value)
        if (!error) next();
        if(error) {
            res.status(422).json({
                statusText: "Unprocessable Entity",
                message: error.details[0].message
            })
        }

    }catch(error){
        res.status(500).json({
            statusCode: 500,
            statusText: "Internal Server Error"
        })
    }
}

module.exports = validate