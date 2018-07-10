const express = require('express');

const app = express();

// middlewares
app.use(express.static);

app.listen(process.env.PORT || 5000);
