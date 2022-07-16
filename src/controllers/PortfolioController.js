module.exports = {
    async index(request, response) {
        return response.status(200).send({
            mensagem: "MEU PORTFOLIO"
        })
    }
};