const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('api tests: movies api', () => {

    let movieId, movieName;

    it('should return all movies', () => {
        request(app)
            .get('/api/movies')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.items[0].name).to.be.equal("The Wizard of Oz");
                movieId = res.body.items[0].id;
            })
    });

    it('should return a movie by specified id', () => {
        request(app)
            .get(`/api/movies/${movieId}`)
            .retry(1)
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal("The Wizard of Oz");
                expect(res.body.id).to.be.equal(1);
            })
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
                expect(res.statusCode).to.be.equal(200);
                movieName = res.body.name;
                console.log('----->' + movieName);
                expect(res.body.name).to.be.equal('Goodfellas (1990)');
            })
    });

});