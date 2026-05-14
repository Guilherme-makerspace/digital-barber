const AtendimentoService = require("../../services/AtendimentoService");
const ProfissionalService = require("../../services/ProfissionalService");
const UsuarioService = require("../../services/UsuarioService");

class AtendimentoController {
  constructor() {
    this.atendimentoService = new AtendimentoService();
    this.profissionalService = new ProfissionalService();
    this.usuarioService = new UsuarioService();
  }

  async index(req, res) {
    res.render("Atendimento/AtendimentoView");
  }

  async atendimentoCreateView(req, res) {
    const profissionais = await this.profissionalService.buscarTodosProfissionais();
    res.render("Atendimento/CreateView", { profissionais });
  }

  async atendimentoPostAsync(req, res) {
    const atendimento = await this.atendimentoService.cadastrarAtendimento(
      req.body.nomeCliente,
      req.body.telefone,
      req.body.dataNascimento,
      req.body.dataAtendimento,
      req.body.horarioAtendimento,
      req.body.tipoServico,
      req.body.profissional
    );

    res.json({ atendimento });
  }

  async atendimentoEditView(req, res) {
    const atendimento = await this.atendimentoService.buscarAtendimento(
      req.params.id
    );
    const profissionais = await this.profissionalService.buscarTodosProfissionais();
    res.render("Atendimento/EditView", { atendimento, profissionais });
  }

  async atendimentoPutAsync(req, res) {
    const affectedRows = await this.atendimentoService.atualizarAtendimento(
      req.body.id,
      req.body.nomeCliente,
      req.body.telefone,
      req.body.dataNascimento,
      req.body.dataAtendimento,
      req.body.horarioAtendimento,
      req.body.tipoServico,
      req.body.profissional
    );

    res.json({ affectedRows });
  }

  async atendimentoDeleteAsync(req, res) {
    const affectedRows = await this.atendimentoService.deletarAtendimento(
      req.params.id
    );
    res.json({ affectedRows });
  }

  async atendimentoListView(req, res) {
    const atendimentos = await this.atendimentoService.buscarTodosAtendimentos();
    res.render("Atendimento/ListView", { atendimentos });
  }
}

module.exports = new AtendimentoController();
