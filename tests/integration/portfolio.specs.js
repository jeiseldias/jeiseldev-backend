const request = require('supertest');
const app = require('../../src/app');

describe('PORTFOLIO', () => {
    it('should be able to show a list of my works', async () => {
        const response = await request(app).post('/portfolio').send();

        expect(response.statusCode).toEqual(200);
    });
});