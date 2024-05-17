const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const BlogsRouter = require("./routes/Blogs.routes")
const CategoriesRouter = require("./routes/Categories.routes")
const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/api/blogs", BlogsRouter)
app.use("/api/categories", CategoriesRouter)
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log("connected")
})

app.listen(5000, () => {
    console.log("server running on 5000")
})