const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const {pinging, queryParameters} = require('./controllers/controller.js')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route 1: Ping request
app.get('/api/ping', pinging);

// Route 2: Post request with three parameters
//          tags: String (required), should pass atleast one tag
//          sortBy: String (optional), default: id
//          direction: String (optional), default: asc
app.get('/api/posts/:tags/:sortBy?/:direction?', queryParameters)

app.listen(PORT, () => {
    console.log(`Web server running on http://localhost:${PORT}`);
});