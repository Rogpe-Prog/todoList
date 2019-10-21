const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb+srv://rogpe:aloha2019@cluster0-ji7tk.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true })


//mongodb://localhost/todo