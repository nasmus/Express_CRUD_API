const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

var corOption = {
    origin: 'https://localhost:3000'

}
//routers
const router = require('./routes/productRouter');
app.use('/api', router);
app.use('/api/comments', router);

//reviews router
const reviewRouter = require('./routes/rewiewRouter');
app.use('/api', reviewRouter);
app.use('/api/add', reviewRouter);

// middleware
app.use(cors(corOption));

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send("hello world");
})

app.listen(3000, ()=>{
    console.log("server is started");
})