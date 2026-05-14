const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")
const ProfissionalController = require("../controllers/ProfissionalController")

const router = Router()

//Usuário
router.get("/user/", (req, res) => UsuarioController.index(req, res))
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioCreateView(req, res))
router.put("/user/edit", (req, res) => UsuarioController.usuarioPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UsuarioController.usuarioEditView(req, res))
router.get("/user/list", (req, res) => UsuarioController.usuarioListView(req, res))
router.delete("/user/delete/:id", (req, res) => UsuarioController.usuarioDeleteAsync(req, res))

//Profissional
router.get("/professionals/", (req, res) => ProfissionalController.profissionalListView(req, res))
router.get("/professionals/create", (req, res) => ProfissionalController.profissionalCreateView(req, res))
router.post("/professionals/create", (req, res) => ProfissionalController.profissionalPostAsync(req, res))
router.get("/professionals/edit/:id", (req, res) => ProfissionalController.profissionalEditView(req, res))
router.put("/professionals/edit", (req, res) => ProfissionalController.profissionalPutAsync(req, res))
router.delete("/professionals/delete/:id", (req, res) => ProfissionalController.profissionalDeleteAsync(req, res))
router.get("/professionals/work/:id", (req, res) => ProfissionalController.profissionalWorkView(req, res))

//Atendimento
router.get("/atendimento/", (req, res) => AtendimentoController.index(req, res))
router.post("/atendimento/create", (req, res) => AtendimentoController.atendimentoPostAsync(req, res))
router.get("/atendimento/create", (req, res) => AtendimentoController.atendimentoCreateView(req, res))
router.put("/atendimento/edit", (req, res) => AtendimentoController.atendimentoPutAsync(req, res))
router.get("/atendimento/edit/:id", (req, res) => AtendimentoController.atendimentoEditView(req, res))
router.delete("/atendimento/delete/:id", (req, res) => AtendimentoController.atendimentoDeleteAsync(req, res))
router.get("/atendimento/list", (req, res) => AtendimentoController.atendimentoListView(req, res))

module.exports = router
