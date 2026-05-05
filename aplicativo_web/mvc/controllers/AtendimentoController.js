const AtendimentoService = require("../../services/AtendimentoService")

class AtendimentoController
{
    constructor()
    {
        this.atendimentoService = new AtendimentoService()
        this.index = this.index.bind(this);
    }

    async index(req, res){
        const atendimentos = await this.atendimentoService.buscarAtendimento(req.params.id)
        res.render("Atendimento/AtendimentoView", {atendimentos})
    }
}

module.exports = new AtendimentoController()
