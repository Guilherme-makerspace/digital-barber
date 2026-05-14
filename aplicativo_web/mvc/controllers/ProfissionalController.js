const ProfissionalService = require("../../services/ProfissionalService");

class ProfissionalController {
  constructor() {
    this.profissionalService = new ProfissionalService();
  }

  async profissionalListView(req, res) {
    const profissionais = await this.profissionalService.buscarTodosProfissionais();
    res.render("Profissional/ListView", { profissionais: profissionais });
  }

  profissionalCreateView(req, res) {
    res.render("Profissional/CreateView");
  }

  async profissionalEditView(req, res) {
    const profissional = await this.profissionalService.buscarProfissional(req.params.id);
    res.render("Profissional/EditView", { profissional: profissional });
  }

  async profissionalPostAsync(req, res) {
    const profissional = await this.profissionalService.cadastrarProfissional(
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.especialidade
    );

    res.json({ profissional: profissional });
  }

  async profissionalPutAsync(req, res) {
    const affectedRows = await this.profissionalService.atualizarProfissional(
      req.body.id,
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.especialidade
    );

    res.json({ affectedRows: affectedRows });
  }

  async profissionalDeleteAsync(req, res) {
    const affectedRows = await this.profissionalService.deletarProfissional(req.params.id);
    res.json({ affectedRows: affectedRows });
  }

  async profissionalWorkView(req, res) {
    const profissional = await this.profissionalService.buscarProfissional(req.params.id);
    const atendimentos = await this.profissionalService.buscarAtendimentosPorProfissional(
      profissional ? profissional.nome : null
    );

    res.render("Profissional/WorkView", {
      profissional: profissional,
      atendimentos: atendimentos,
    });
  }
}

module.exports = new ProfissionalController();
