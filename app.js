const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

var items = [];
var item = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req,res)=>{
        var date = new Date();
        
        var options = {
            weekday : "long",
            day :"numeric",
            month : "long"
        } 

        date = date.toLocaleDateString('en-IN',options);

        res.render('list', {date : date, item : items,PItem : item});
})

app.post('/', (req,res)=>{
    var date = new Date();
        
    var options = {
        weekday : "long",
        day :"numeric",
        month : "long"
    } 

    date = date.toLocaleDateString('en-IN',options);

    item = req.body.todo;
    items.push(item);

    res.redirect('/');
})







app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})