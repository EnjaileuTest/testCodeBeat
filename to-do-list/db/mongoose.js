const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/to-do-list',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})