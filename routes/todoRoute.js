module.exports = app => {
    const todo = require("../controllers/todoController");
    const validate = require("../middlewares/validateRequest")
    var router = require("express").Router();

    router.get("/", todo.findAll);
    router.post("/create", todo.create)
    
    app.use('/api/todo', router);
};

