const express = require('express');
const mongoose = require('mongoose');
const bodyParder = require('body-parser');
const methodOverride  = require('method-override');
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;

db.once('open', function() {
    console.log('DB Connection');
})
db.on('error', function(err) {
    console.log('DB ERROR : ', err);
})

const port = 3000;
app.listen(port, function() {
    console.log('SERVER ON! http://localhost:'+port);
})

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParder.json());
app.use(bodyParder.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/posts'));