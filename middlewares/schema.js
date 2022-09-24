const Joi = require("joi")

const schema = {
    create: Joi.object({
        todoName: Joi.string().require(),
        todoDescription: Joi.string().require(),
        todoIsComplete: Joi.boolean()
    })
}