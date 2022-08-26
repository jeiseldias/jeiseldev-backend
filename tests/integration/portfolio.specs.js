const request = require('supertest');
const app = require('../../src/app');

describe('PORTFOLIO', () => {
    it('should be able to show a list of my works', async () => {
        const response = await request(app).get('/portfolio').send();

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('jobs');
        expect(response.body.jobs.length).toBeGraterThan(0);
    });

    it('should be able to add a new job', async() => {
        const response = await request(app).post('/portfolio').send({
            name: 'Nome do projeto',
            year: '2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem massa. Nulla tincidunt, quam at mollis aliquam, quam erat porttitor nunc, non dictum dui est id ligula.',
            url: 'https://jeisel.dev',
            repo: 'https://github.com/jeiseldias',
        });

        expect(response.statusCode).toEqual(200);
    });
});