const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');

const mongoose = require('mongoose');
const connection = mongoose.connection;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/react_books';

const Colors = require('colors');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

connection.on('error', () => { console.log('connection error') });

connection.once('open', () => {
    console.log('connected to database'.yellow);
    console.log('-------------------------------'.rainbow);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoute = require('./controller/apiRoutes');
app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log('\n-------------------------------'.rainbow);
    console.log(`Listening on http://localhost:${PORT}`.blue);
});