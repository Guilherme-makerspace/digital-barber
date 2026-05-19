const moment = require('moment');

class Atendimento
{
    #id
    #nomeCliente
    #telefone
    #horarioAtendimento
    #dataAtendimento
    #dataNascimento
    #tipoServico
    #profissional
      

    constructor(nomeCliente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.#nomeCliente = nomeCliente
        this.#telefone = telefone
        this.#horarioAtendimento = horarioAtendimento
        this.#dataAtendimento = dataAtendimento
        this.#dataNascimento = dataNascimento
        this.#tipoServico = tipoServico
        this.#profissional = profissional
    }

    get id()
    {
        return this.#id; 
    }

    get nomeCliente()
    {
        return this.#nomeCliente; 
    }

    get telefone()
    {
        return this.#telefone; 
    }

    get horarioAtendimento()
    {
        return this.#horarioAtendimento; 
    }

    get dataAtendimento()
    {
        return this.#dataAtendimento; 
    }

    get dataNascimento()
    {
        return this.#dataNascimento; 
    }

    get tipoServico()
    {
        return this.#tipoServico; 
    }

    get profissional()
    {
        return this.#profissional; 
    }

    set id(valor)
    {
        this.#id = valor
    }
    
    set nomeCliente(valor)
    {
        this.#nomeCliente = valor
    }

    set telefone(valor)
    {
        this.#telefone = valor
    }

    set horarioAtendimento(valor)
    {
        this.#horarioAtendimento = valor
    }

    set dataAtendimento(valor)
    {
        this.#dataAtendimento = valor
    }

    set dataNascimento(valor)
    {
        this.#dataNascimento = valor
    }

    set tipoServico(valor)
    {
        this.#tipoServico = valor
    }

    set profissional(valor)
    {
        this.#profissional = valor
    }

    validarConflitoHorario(horarioInformado, horarioPersistido)
    {
        let validacao = false
        let diffData = 0

        if(!horarioPersistido) return !validacao

        if(horarioInformado)
        {
            if(horarioInformado == horarioPersistido)
            {
                return validacao
            }

            const inicio = moment(horarioInformado, 'HH:mm');
            const fim = moment(horarioPersistido, 'HH:mm');

            diffData = fim.diff(inicio, 'minutes') 


            switch(this.#tipoServico){
                case "Corte de Cabelo": if(diffData > 40){validacao = true};
                    break;
                case "Barba":if(diffData > 20){validacao = true};
                    break;
                case "Sobrancelha":if(diffData > 10){validacao = true};
                    break;
                default: if(diffData > 40){validacao = true};
                    break;
            }
        }

    }

}
module.exports = Atendimento