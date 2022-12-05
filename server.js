const express = require("express")
const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const app = express()
const SERVER_PORT = process.env.PORT || 8000;
var cors = require("cors")
require("dotenv").config()

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://vinz232:Shiridi9@cluster0.m5llcr5.mongodb.net/?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database.");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});




app.route("/hello")
    .get((req, res) => {
    res.send("Hello World from Vinayaka Polimera")
})


//employeeAPI
app.use("/api/", employeeRoutes)

//userRouter
const userRoutes = require("./routes/users")
//userAPI
app.use("/api/", userRoutes)

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});





