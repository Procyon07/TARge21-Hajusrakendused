const express = require('express');
const cors = require('cors');
const app = express();
const appGreetings = express();

app.use(cors());        // Avoid CORS errors in browsers
app.use(express.json()) // Populate req.body

appGreetings.use(cors());        // Avoid CORS errors in browsers
appGreetings.use(express.json()) // Populate req.body


require("./routes/widgetsRoutes")(app)
require("./routes/greetingsRoutes")(appGreetings)

app.listen(8080, () => {
    console.log(`API up at: http://localhost:8080`)
})
appGreetings.listen(8081, () => {
    console.log(`API up at: http://localhost:8081`)
})