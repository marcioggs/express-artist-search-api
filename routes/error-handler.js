const errorHandler = function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error');
}

module.exports = errorHandler;
