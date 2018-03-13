const express = require('express');
const router = express.Router();
const config = require('../config.js');
const Artist = require('../services/Artist.js');

router.get('/:artistName', function(req, res, next) {

  const artist = new Artist(config.musixmatchApi.baseUrl, config.musixmatchApi.key);

  artist.search(req.params.artistName)
    .then(function(data) {
      res.type('json');
      res.send(data);
    }, function(err) {
      next(err);
    });

});

module.exports = router;
