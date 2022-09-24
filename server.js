const express = require("express")
const cors = require("cors")
const db = require("./models");

const app = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application todo simple"})
})

// include routes
require("./routes/todoRoute")(app)
require("./routes/photoRoute")(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})