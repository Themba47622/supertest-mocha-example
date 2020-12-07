const request = require('supertest');
const expect = require('chai').expect;

describe('api tests: regres api', () => {

    let baseUrl = 'https://reqres.in';

    it('should return all users', async () => {
        const res = await request(baseUrl)
            .get('/api/users')
        expect(res.ok).to.be.true;
        expect(res.body.data[0].id).to.be.equal(1);
    });

    it('should return a single user', async () => {
        const res = await request(baseUrl)
            .get('/api/users/1')
            .expect(200);
        expect(res.body.data.first_name).to.be.equal("George");
    });

    it('should create a new user', async () => {
        const res = await request(baseUrl)
            .post('/api/users')
            .send({
                "name": "zotho",
                "job": "qa engineer"
            })
            .expect(201);
        expect(res.body.name).to.be.equal("zotho");
        console.log(res.body);
    });

    it('should update a new user', async () => {
        const res = await request(baseUrl)
            .put('/api/users')
            .send({
                "name": "zethe",
                "job": "sdet"
            })
            .expect(200);
        expect(res.body.job).to.be.equal("sdet");
        console.log(res.body);
    });

    it('should delete a user', async () => {
        await request(baseUrl)
            .delete('/api/users/1')
            .expect(204);
    });

});