class AtendimentoController
{

    constructor()
    {
      
    }

    async index(req, res)
    {
        res.render("Atendimento/AtendimentoView")
    }

  

}

module.exports = new AtendimentoController()