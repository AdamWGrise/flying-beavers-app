const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const items = require("./routes/api/items");

const PORT = process.env.PORT || 5000

const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// MongoDB connection
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err))

// Passport
app.use(passport.initialize())
require('./config/passport')(passport)

// Routes
app.use('/api/users', users);
app.use("/api/items", items);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
