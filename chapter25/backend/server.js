const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());


app.use(express.json())

app.get("/api/users", (req,res) => {
    res.json([
        {
            id:1,
            name:"John",
            email:"[EMAIL_ADDRESS]"
        },
        {
            id:2,
            name:"Jane",
            email:"[EMAIL_ADDRESS]"
        },
        {
            id:3,
            name:"Bob",
            email:"[EMAIL_ADDRESS]"
        }
    ])
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
