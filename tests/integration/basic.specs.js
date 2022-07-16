const request = require('supertest');
const app = require('../../src/app');

describe('BASIC', () => {
    it('should be able to show my app name', async () => {
        const response = await request(app).get('/').send();

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('App');
        expect(response.body.App).toEqual('BACKEND - jeisel.dev');
    });
});