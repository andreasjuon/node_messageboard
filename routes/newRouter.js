const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('new', { message: 'Create a new message' });
});


module.exports = newRouter;