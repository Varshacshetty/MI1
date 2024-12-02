const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.use('/menu', menuRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
