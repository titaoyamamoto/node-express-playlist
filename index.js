const express = require('express');
const app = express();

const port = 3000;

var helloRoutes = require('./routes/hello-world');
app.use('/', helloRoutes);

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
