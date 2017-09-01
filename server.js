const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testapi');


const companySchema = new mongoose.Schema({
  name: 'string',
  permalink: 'string',
  _id: 'string'
})

const Company = mongoose.model('Company', companySchema);

const app = express();

app.get('/', function (req, res) {
  Company.findOne(function (err, doc) {
    res.send(doc);
  })
});

app.listen(3000);