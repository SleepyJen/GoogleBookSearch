const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-url');

const BooksSchema = new Schema({
    title: {
        type: String
    },
    authors: {
        type: [],
        default: []
    },
    description: {
        type: String
    },
    image: {
        type: mongoose.SchemaTypes.Url
    },
    link: {
        type: mongoose.SchemaTypes.Url
    },
    bookId: {
        type: String
    }
});

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;