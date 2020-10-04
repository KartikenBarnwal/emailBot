const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ICELL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});