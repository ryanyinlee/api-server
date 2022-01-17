'use strict';

const express = require('express');

const { GameCollection } = require('../models');

const router = express.Router(); // object defines routing logic

//create
router.post('/game', async (request, response) => {
    let games = await GameCollection.create(request.body);
    response.status(201).send(games);
  });

// get or read
router.get('/game', async (request, response) => {
    let games = await GameCollection.read();
    response.status(200).send(games);
  });


// update  
  router.patch('/game/:id', async (request, response) => {
    let games = await GameCollection.update(request.params.id, request.body);
    response.statu(201).send(games);
  });

  // delete  
  router.delete('/game/:id', async (request, response) => {
    let games = await GameCollection.destroy(request.params.id);
    response.status(204).send(games);
  });


module.exports = router;


        
        
