const express = require('express');

const app = express();

app.use(express.json())

app.get('/api/movies', (req, res) => {
    res.status(200).json({
        items: [
            {
                id: 1,
                name: "The Wizard of Oz",
                imdb_score: 9.5,
                popularity: 83.0,
                director: "Victor Fleming",
                genre: [{
                    id: 1,
                    name: "Fantasy",
                },
                    {
                        id: 2,
                        name: "Action",
                    }
                ]
            },
            {
                id: 2,
                name: "The Godfather (1972)",
                imdb_score: 9.2,
                popularity: 99.0,
                director: "Francis Ford Coppola",
                genre: [{
                    id: 3,
                    name: "Crime",
                },
                    {
                        id: 4,
                        name: "Drama",
                    }
                ]
            },
            {
                id: 3,
                name: "Parasite",
                imdb_score: 8.5,
                popularity: 77.0,
                director: "Bong Joon Ho",
                genre: [{
                    id: 1,
                    name: "Fantasy",
                },
                    {
                        id: 2,
                        name: "Action",
                    }
                ]
            }
        ]
    });
});

app.get('/api/movies/:id', (req, res) => {
    res.status(200).json({
        id: 1,
        name: "The Wizard of Oz",
        imdb_score: 9.5,
        popularity: 83.0,
        director: "Victor Fleming",
        genre: [{
            id: 1,
            name: "Fantasy",
        },
            {
                id: 2,
                name: "Action",
            }
        ]
    });
});

app.post('/api/movies', (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let director = req.body.director;
    res.json({
        id: id,
        name: name,
        imdb_score: 8.7,
        popularity: 95.0,
        director: director,
        genre: [{
            id: 3,
            name: "Crime",
        },
            {
                id: 4,
                name: "Drama",
            }
        ]
    });
});

app.delete('/api/movies/:id', (req, res) => {
    res.status(204);
});

module.exports = app;

app.listen(8000, () => {
    console.log('sample test app listening on port 8000!')
});