const express = require('express');

const app = express();

// middlewares
app.use(express.static('./client/build'));

// routes
const router = express.Router();

const catsRoutes = require('./routes/cats');
router.use('/cats', catsRoutes);
app.use('/api', router);

// start server
app.listen(process.env.PORT || 5000);
