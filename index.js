const express = require('express');
const AppRoutes = require('./Src/routes/hall')
const app = express();

app.use(express.json());
app.use('/',AppRoutes)


app.listen(7000)