const express = require('express');
const router = express.Router();
const db = require('../model');

router.get('/', (req, res) => {
    db.Books.find({}).then(result => {
        res.json(result);
    });
});

router.post('/save', (req, res) => {
    db.Books.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
        bookId: req.body.bookId
    }).then(result => {
        res.json(result);
    });
});

router.post('/saveAuthors/:id', (req, res) => {
    db.Books.findOneAndUpdate(
        { bookId: req.params.id },
        {
            $push: {
                authors: {
                    authors: req.body.authors
                }
            }
        }
    ).then(result => {
        res.send(result);
    });
});

router.delete('/delete/:id', (req, res) => {
    db.Books.deleteOne({ bookId: req.params.id }).then(result => {
        res.send(result);
    });
});

router.delete('/deleteById/:id', (req, res) => {
    db.Books.deleteOne({ _id: req.params.id }).then(result => {
        res.send(result);
    });
});

module.exports = router;