const express = require('express');

const cors = require('cors');
const server = express();

server.use(express.json());

server.use(cors());

server.get('/api/users', (req, res) => {
    res.status(200).json([ {name: "Bailey"}, {name: "Joey"} ])
})

server.post('/api/register', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({ message: "please enter username and password" })
    } else {
    const newUser = {
        username: req.body.username,
        password: req.body.password
        }
    res.status(201).json(newUser)
    }
})

server.post('/api/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({ message: "please enter username and password" })
    } else {
        res.status(200).json({ message: "welcome starshine" })
    }
})

module.exports = server;