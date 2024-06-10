const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const alertData = req.body;
  console.log('Alert received:', alertData);
  
  // Process the alert data as needed
  
  res.status(200).send('Alert received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
