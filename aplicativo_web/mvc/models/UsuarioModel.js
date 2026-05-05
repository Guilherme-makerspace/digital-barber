class Usuario
{
    email
    senha
    nome
    telefone
    dataDeNascimento

    constructor(email, senha, nome, telefone, data_de_nascimento)
    {
        this.email = email
        this.senha = senha
        this.nome = nome
        this.telefone = telefone
        this.data_de_nascimento = data_de_nascimento
    }

}

module.exports = Usuario