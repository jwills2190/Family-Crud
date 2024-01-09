// IMPORTS
const express = require('express');
const app = express();
const path = require("path");
const connectToMongoDB = require("./database/mongodb");
const methodOverride = require("method-override");

// MIDDLEWARE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use(methodOverride('_method'));

// ROUTES
const viewRouter = require("./routes/client/viewRouter");
// localhost:3000/
app.use("/", viewRouter);

const familyRouter = require("./routes/api/familyRouter")
// localhost:3000/api/family/...
app.use("/api/family", familyRouter);

// PORT
const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)

    connectToMongoDB();
});