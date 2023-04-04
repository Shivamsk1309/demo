const express =  require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const dotenv = require('dotenv').config();

app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hello');
})
app.use('/api/v1/tasks',tasks);

app.listen(port, () =>{
   console.log( `app is listening on ${port} `)
});
    