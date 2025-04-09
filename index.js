const express = require('express');
const app = express();

const sequelize = require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
    console.log('Server is running');
    res.send('Welcome for the API');
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));