const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://note_db:P0VEpWwj6xuFv1KR@cluster0.hrmen.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log('DB Conectada'))
    .catch(err => console.error(err));