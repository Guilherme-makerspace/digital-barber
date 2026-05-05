class Atendimento 
{

    nomeCliente
    dataHora
    telefone
    tipoServico
    profissional

    constructor(nomeCliente, dataHora, telefone, tipoServico, profissional)
    {
        this.nomeCliente = nomeCliente
        this.dataHora = dataHora
        this.telefone = telefone
        this.tipoServico = tipoServico
        this.profissional = profissional
    }
}

module.exports = Atendimento