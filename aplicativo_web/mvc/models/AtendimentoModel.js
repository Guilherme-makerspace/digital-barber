class Atendimento {
  #id;
  #nomeCliente;
  #telefone;
  #horarioAtendimento;
  #dataAtendimento;
  #dataNascimento;
  #tipoServico;
  #profissional;

  constructor(
    nomeCliente,
    telefone,
    horarioAtendimento,
    dataNascimento,
    dataAtendimento,
    tipoServico,
    profissional
  ) {
    this.#nomeCliente = nomeCliente;
    this.#telefone = telefone;
    this.#horarioAtendimento = horarioAtendimento;
    this.#dataNascimento = dataNascimento;
    this.#dataAtendimento = dataAtendimento;
    this.#tipoServico = tipoServico;
    this.#profissional = profissional;
  }

  get id() {
    return this.#id;
  }

  set id(valor) {
    this.#id = valor;
  }

  get nomeCliente() {
    return this.#nomeCliente;
  }

  get telefone() {
    return this.#telefone;
  }

  get horarioAtendimento() {
    return this.#horarioAtendimento;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }

  get dataAtendimento() {
    return this.#dataAtendimento;
  }

  get tipoServico() {
    return this.#tipoServico;
  }

  get profissional() {
    return this.#profissional;
  }

  set horarioAtendimento(valor) {
    this.#validarHorario(valor);
    this.#horarioAtendimento = valor;
  }

  #validarHorario(horario) {
    const pattern = /^([01]\d|2[0-3]):?([0-5]\d)$/;

    if (!pattern.test(horario)) {
      throw new Error("Horário de atendimento inválido");
    }
    if (horario < "08:00" || horario > "18:00") {
      throw new Error("Horário de atendimento fora do expediente");
    }
  }
}

module.exports = Atendimento;
