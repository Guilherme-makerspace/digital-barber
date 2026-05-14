const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");

class AtendimentoService {
  #atendimentoSchema;

  constructor() {
    this.#atendimentoSchema = AtendimentoSchema;
  }

  async cadastrarAtendimento(
    nomeCliente,
    telefone,
    dataNascimento,
    dataAtendimento,
    horarioAtendimento,
    tipoServico,
    profissional
  ) {
    const atendimento = new Atendimento(
      nomeCliente,
      telefone,
      horarioAtendimento,
      dataNascimento,
      dataAtendimento,
      tipoServico,
      profissional
    );

    const a = await this.#atendimentoSchema.create({
      nomeCliente: atendimento.nomeCliente,
      telefone: atendimento.telefone,
      horarioAtendimento: atendimento.horarioAtendimento,
      dataNascimento: atendimento.dataNascimento,
      dataAtendimento: atendimento.dataAtendimento,
      tipoServico: atendimento.tipoServico,
      profissional: atendimento.profissional,
    });

    return a;
  }

  async buscarAtendimento(id) {
    const dado = await this.#atendimentoSchema.findOne({
      where: { id: id },
    });

    if (!dado) {
      return null;
    }

    const atendimento = new Atendimento(
      dado.nomeCliente,
      dado.telefone,
      dado.horarioAtendimento,
      dado.dataNascimento,
      dado.dataAtendimento,
      dado.tipoServico,
      dado.profissional
    );

    atendimento.id = dado.id;

    return atendimento;
  }

  async atualizarAtendimento(
    id,
    nomeCliente,
    telefone,
    dataNascimento,
    dataAtendimento,
    horarioAtendimento,
    tipoServico,
    profissional
  ) {
    let rows = 0;

    const atendimentoExistente = await this.buscarAtendimento(id);

    if (atendimentoExistente) {
      const model = new Atendimento(
        nomeCliente,
        telefone,
        horarioAtendimento,
        dataNascimento,
        dataAtendimento,
        tipoServico,
        profissional
      );

      const affectedRows = await this.#atendimentoSchema.update(
        {
          nomeCliente: model.nomeCliente,
          telefone: model.telefone,
          horarioAtendimento: model.horarioAtendimento,
          dataNascimento: model.dataNascimento,
          dataAtendimento: model.dataAtendimento,
          tipoServico: model.tipoServico,
          profissional: model.profissional,
        },
        {
          where: {
            id: id,
          },
        }
      );

      rows = affectedRows;
    }

    return rows;
  }

  async deletarAtendimento(id) {
    const atendimento = await this.#atendimentoSchema.findOne({
      where: { id: id },
    });

    const affectedRows = await atendimento.destroy();

    return affectedRows;
  }

  async buscarTodosAtendimentos() {
    const atendimentos = [];
    const dados = await this.#atendimentoSchema.findAll();

    for (const atendimento of dados) {
      const a = new Atendimento(
        atendimento.nomeCliente,
        atendimento.telefone,
        atendimento.horarioAtendimento,
        atendimento.dataNascimento,
        atendimento.dataAtendimento,
        atendimento.tipoServico,
        atendimento.profissional
      );
      a.id = atendimento.id;

      atendimentos.push(a);
    }

    return atendimentos;
  }
}

module.exports = AtendimentoService;
