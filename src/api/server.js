const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


app.post('/src/components/login', (req, res) => {
  const { email, password } = req.body;


  if (email === 'admin' && password === '123') {
  
    res.status(200).json({ success: true });
  } else {
   
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
