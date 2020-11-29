const request = require('supertest');
const expect = require('chai').expect;

let baseUrl = 'https://www.boredapi.com';

describe('api tests: bored api', () => {

    it('should return an activity ', () => {
        request(baseUrl)
            .get('/activity')
            .end((err, res) => {
                expect(res.ok).to.be.true;
            })
    });

    it('should return a recreational activity', (done) => {
        request(baseUrl)
            .get('/activity')
            .query({'type': 'recreational'})
            .expect(200, {participants: '1'});
        done();
    });

});