module.exports = app => {
    const todo = require("../controllers/todoController");
    const validate = require("../middlewares/validateRequest")
    var router = require("express").Router();

    router.get("/", todo.findAll);
    router.get("/:id", todo.findOne);
    router.post("/create", todo.create)
    router.put("/update/:id", todo.update)
    router.delete("/delete/:id", todo.delete)
    
    app.use('/api/todo', router);
};

