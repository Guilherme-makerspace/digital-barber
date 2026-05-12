class Atendimento
{
    nomeCLiente
    telefone
    horarioAtendimento
    dataAtendimento
    dataNascimento
    tipoServico
    profissional
    constructor(nomeCLiente, telefone, horarioAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.nomeCLiente = nomeCLiente
        this.telefone = telefone
        this.horarioAtendimento = horarioAtendimento
        this.dataNascimento = dataNascimento
        this.tipoServico = tipoServico
        this.profissional = profissional
    }
}
module.exports = Atendimento