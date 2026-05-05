class Atendimento 
{

    horario
    data
    email
    servico
    profissional

    constructor(horario, data, email, servico, profissional)
    {
        this.horario = horario
        this.data = data
        this.email = email
        this.servico = servico
        this.profissional = profissional
    }
}

module.exports = Atendimento