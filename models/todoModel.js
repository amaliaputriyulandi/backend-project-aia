module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
        todoName : {
            type: Sequelize.STRING
        },
        todoDescription: {
            type: Sequelize.STRING
        },
        todoIsComplete: {
            type: Sequelize.BOOLEAN
        }
    })

    return Todo
}