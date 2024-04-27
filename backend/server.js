const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001;

app.use(cors());
app.use(express.json());

//Sends message from server to frontend
app.get('/test', (req, res) => {
    console.log('Recieved info from frontend')
    res.json({ message: "Hello from server!" });
});

//Start the server
app.listen(port, () => {
    console.log('Backend server is now running on port 3001')
});


