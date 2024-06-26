const express = require("express");
const {connection} = require("./Config/db")
const {productRoutes} = require("./Routes/productRoutes")
require("dotenv").config()
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cors())

app.get('/',async(req,res)=>{
await req.json
res.send({"msg":"This is Homepage"})
})

app.use("/",productRoutes)


app.listen(process.env.PORT,async()=>{
    try {
    await connection
    console.log("connected to db")
    console.log(`Server is running at port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)

    }
})