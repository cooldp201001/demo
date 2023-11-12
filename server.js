const express = require('express')
const connectDB = require('./db')
const studentModel = require('./model')
const bodyParser = require('body-parser');
const PORT = 500
// express
const app = express();
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
//connecting to database
connectDB();
//showing html page as static
app.use(express.static('public'));

app.post("/submit", async (req, res) => { 
    const { name, email, age } = req.body;
    const newUser = new studentModel({
        name,
        email,
        age,
      });
    
      try {
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
    res.send('User saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving user');
  }
}); 


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));