const Atendimento = require("../mvc/models/AtendimentoModel")
const AtendimentoSchema = require("../schemas/AtendimentoSchema")

class AtendimentoService 

{
    #atendimentoSchema

    constructor() {
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id) {
        return await this.#atendimentoSchema.findAll({
            where: {id: id}
        });
    }

}

module.exports = AtendimentoService;