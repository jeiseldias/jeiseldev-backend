const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('PORTFOLIO', () => {
    beforeAll(async() => {
        await connection('jdv_jobs').delete();
    });

    afterAll(async() => {
        await connection('jdv_jobs').delete();
        await connection.destroy();
    });

    it('should be able to add a new job', async() => {
        const response = await request(app).post('/portfolio').send({
            name: 'Nome do projeto',
            year: '2022',
            description: 'My first job',
            url: 'https://jeisel.dev',
            repo: 'https://github.com/jeiseldias',
        });

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('result');
        expect(response.body.result).toBeTruthy();
    });

    it('shouldnt be able to add the same job twice', async() => {
        const response = await request(app).post('/portfolio').send({
            name: 'Nome do projeto',
            year: '2022',
            description: 'My first job',
            url: 'https://jeisel.dev',
            repo: 'https://github.com/jeiseldias',
        });

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('result');
        expect(response.body.result).not.toBeTruthy();
    });

    it('should be able to show a list of my jobs', async () => {
        const response = await request(app).get('/portfolio').send();

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('jobs');
        expect(response.body.jobs.length).toBeGreaterThan(0);
    });
});