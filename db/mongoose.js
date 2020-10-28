const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://developers:industrycell@cluster0.9pz2o.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// mongodb+srv://developers:industrycell@cluster0.9pz2o.mongodb.net/test