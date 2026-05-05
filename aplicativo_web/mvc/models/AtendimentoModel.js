class Atendimento 
{

    horarioAtendimento
    dataAtendimento
    email
    tipoServico
    profissional

    constructor(horarioAtendimento, dataAtendimento, email, tipoServico, profissional)
    {
        this.horarioAtendimento = horarioAtendimento
        this.dataAtendimento = dataAtendimento
        this.email = email
        this.tipoServico = tipoServico
        this.profissional = profissional
    }
}

module.exports = Atendimento