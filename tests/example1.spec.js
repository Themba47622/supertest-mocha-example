const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('api tests: movies api', () => {
    let movieId, movieName;

    it('should return all movies', () => {
        request(app)
            .get('/api/movies')
            .end((err, res) => {
                expect(res.body.items[0].name).to.be.equal("The Wizard of Oz");
                movieId = res.body.items[0].id;
            })
    });

    it('should return a movie by specified id', (done) => {
        request(app)
            .get(`/api/movies/${movieId}`)
            .expect(200, {id: '1', name: 'The Wizard of Oz'});
        done();
    });

    it('should add a new movie', () => {
        request(app)
            .post('/api/movies')
            .send({
                "id": 4,
                "name": "Goodfellas (1990)",
                "imdb_score": 8.7,
                "popularity": 95.0,
                "director": "Martin Scorsese",
                "genre": [{
                    "id": 3,
                    "name": "Crime"
                },
                    {
                        "id": 4,
                        "name": "Drama"
                    }
                ]
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                movieName = res.body.name;
                console.log('----->' + movieName);
                expect(res.body.name).to.be.equal('Goodfellas (1990)');
            })
    });

    it('should delete a movie', (done) => {
        request(app)
            .delete('/api/movies/1')
            .expect(204);
        done();
    });

});