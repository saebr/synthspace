const express = require ('express');
const app = express();
const port = 3001;

//Start the server
app.listen(port, () => {
    console.log('Backend server is now running on port 3001')
});

