const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const axios = require('axios');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.status(200).json({
        response_status: "success",
        message: "this is server_01"
    })
})


app.get('/cross_site_request', (req, res) => {
    res.status(200).json({
        response_status: "success",
        message: "server_01 is responding"
    })
})

//make a cross origin request to server_01
axios.get('http://localhost:3000/cross_site_request')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

//listen to port 3000
app.listen(3000, () => {
    console.log("server_01 is running on port 3000");
})