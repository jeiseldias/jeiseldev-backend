const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const data = await connection('jdv_jobs').select('*');
        console.log(data);
        
        return response.status(200).send({
            jobs: data,
        })
    },

    async create(request, response) {
        const { name, year, description, url, repo } = request.body;

        try {
            await connection('jdv_jobs').insert({
                name,
                year,
                description,
                url,
                repo
            });
         
            return response.status(200).send({
                result: true,
            });
        } catch (error) {
            return response.status(400).send({
                result: false,
                error,
            });
        }
    },
};