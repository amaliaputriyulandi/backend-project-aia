module.exports = app => {
    const photo = require("../controllers/photoController")
    var router = require("express").Router();

    router.get("/findTag", photo.findTag);
    router.get("/getAll", photo.getAll);
    
    app.use('/api/photo', router);
};

