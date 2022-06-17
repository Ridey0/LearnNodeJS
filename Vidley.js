const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const genres = [
    {id: 1, name: "Action"},
    {id: 2, name: "Horror"},
    {id: 3, name: "Romcom"}
]

app.post('/api/movie/genres',(req, res) => {
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre);
})

app.get('/api/movie/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send("Cannot find the Movie Genres");
    }
    res.send(genre);
})

app.put('/api/movie/genres/:id', (req, res) => {
    let genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send("Cannot find the Movie Genres");
    }
    genre.name = req.body.name;
    res.send(genre);
})

app.delete('/api/movie/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send("Cannot find the Movie Genres");
    }
    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})