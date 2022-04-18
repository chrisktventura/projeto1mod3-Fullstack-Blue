const mongoose = require('mongoose');

const connectToDatabase = async () => {
  mongoose
    .connect('mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGO-DB CONNECTED'))
    .catch((err) => console.log(err));
};

module.exports = connectToDatabase;
