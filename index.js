const express = require('express');
const app = express();

const port = 3000;

app.get('/hello', function (req, res) {
    return res.status(200).json({ message: 'hello world' });
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
