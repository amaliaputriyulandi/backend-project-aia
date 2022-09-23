// const router = require("express").Router()
// const todo = require("../controllers/todoController")

// router.get("/", todo.findAll)

// // router.use('/api/todo', router);

// module.exports = router

module.exports = app => {
    const todo = require("../controllers/todoController");
    var router = require("express").Router();

    router.get("/", todo.findAll);
    
    app.use('/api/todo', router);
};

