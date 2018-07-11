const express = require('express');

const app = express();

// middlewares

// routes
const router = express.Router();

const catsRoutes = require('./routes/cats');
router.use('/cats', catsRoutes);
app.use('/api', router);

// serve client app when in production env
if (process.env.NODE_ENV === 'poduction') {
  const path = require('path');
  app.use(express.static('./client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// start server
app.listen(process.env.PORT || 5000);
