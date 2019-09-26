module.exports = {
  // mongoURI: 'mongodb+srv://mongobot:mCqfFuyCAsvNWlrE@mern-auth-cmti5.gcp.mongodb.net/test?retryWrites=true&w=majority',
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/familymanager",
  secretOrKey: 'secret'
}
