const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const image = require('./controllers/image.js');
const profile = require('./controllers/profile.js');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'billionaireat23',
    database : 'img-rec-backend'
  }
})
db.select('*').from('users').then(data => {
  console.log(data);
})

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send(database.users);
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.put('/image', (req, res) => {image.handleImage(req, res, db)})

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)})

app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)})
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))





