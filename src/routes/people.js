'use strict';

const express = require('express');

const { PeopleCollection } = require('../models');

const router = express.Router(); // object defines routing logic

//create
router.post('/people', async (request, response) => {
    let people = await PeopleCollection.create(request.params.body);
    console.log(JSON.stringify(people));
    response.status(201).send(people);
  });

// get or read
router.get('/people', async (request, response) => {
    let people = await PeopleCollection.read();
    response.status(200).send(people);
  });


// update  
  router.patch('/people/:id', async (request, response) => {
    let people = await PeopleCollection.update(request.params.id, request.body);
    response.statu(201).send(people);
  });

  // delete  
  router.delete('/people/:id', async (request, response) => {
    let people = await PeopleCollection.destroy(request.params.id);
    response.status(204).send(people);
  });


module.exports = router;
