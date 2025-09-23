const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from nodejs-demo-app!'));
app.get('/', (req, res) => res.send('deployment of applicaton is done successfully!'));
app.get('/', (req, res) => res.send('using github actions'));
app.get('/', (req, res) => res.send('task 1 done successfully'));


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

