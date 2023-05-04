const express = require('express');

const allData = require('./data/recipe.json');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())

app.get('/',(reg, res)=>{
    res.send('chef server is running')
})

app.get("/category", (reg, res) => {
  res.send(allData);
});


app.get('/categories/:id',(reg,res)=>{
    const id = reg.params.id;
    const chefItem = allData.filter((item)=>item.id == id)
    res.send(chefItem);
})



app.listen(port, ()=>{
    console.log('chef server is running');
})