const Profissional = require("../mvc/models/ProfissionalModel");
const ProfissionalSchema = require("../schemas/ProfissionalSchema");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");
const AtendimentoModel = require("../mvc/models/AtendimentoModel");

class ProfissionalService {
  #profissionalSchema;

  constructor() {
    this.#profissionalSchema = ProfissionalSchema;
  }

  async buscarProfissional(id) {
    const dado = await this.#profissionalSchema.findOne({ where: { id } });
    if (!dado) return null;

    const profissional = new Profissional(
      dado.email,
      dado.password,
      dado.username,
      dado.specialty
    );
    profissional.id = dado.id;

    return profissional;
  }

  async buscarTodosProfissionais() {
    const dados = await this.#profissionalSchema.findAll();

    return dados.map((dado) => {
      const profissional = new Profissional(
        dado.email,
        dado.password,
        dado.username,
        dado.specialty
      );
      profissional.id = dado.id;
      return profissional;
    });
  }

  async cadastrarProfissional(username, email, password, especialidade) {
    const profissional = new Profissional(email, password, username, especialidade);

    const created = await this.#profissionalSchema.create({
      username: profissional.nome,
      email: profissional.email,
      password: profissional.senha,
      specialty: profissional.especialidade,
    });

    return created;
  }

  async atualizarProfissional(id, username, email, password, especialidade) {
    const existente = await this.buscarProfissional(id);
    if (!existente) return 0;

    const usernameFinal = username ?? existente.nome;
    const emailFinal = email ?? existente.email;
    const senhaFinal = password ?? existente.senha;
    const especialidadeFinal = especialidade ?? existente.especialidade;

    const affectedRows = await this.#profissionalSchema.update(
      {
        username: usernameFinal,
        email: emailFinal,
        password: senhaFinal,
        specialty: especialidadeFinal,
      },
      { where: { id } }
    );

    return affectedRows;
  }

  async deletarProfissional(id) {
    const profissional = await this.#profissionalSchema.findOne({ where: { id } });
    if (!profissional) return 0;

    return await profissional.destroy();
  }

  async buscarAtendimentosPorProfissional(profissionalNome) {
    const dados = await AtendimentoSchema.findAll({
      where: { profissional: profissionalNome },
      order: [["dataAtendimento", "ASC"]],
    });

    return dados.map((atendimento) => {
      const a = new AtendimentoModel(
        atendimento.nomeCliente,
        atendimento.telefone,
        atendimento.horarioAtendimento,
        atendimento.dataNascimento,
        atendimento.dataAtendimento,
        atendimento.tipoServico,
        atendimento.profissional
      );
      a.id = atendimento.id;
      return a;
    });
  }
}

module.exports = ProfissionalService;
