const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", (req, res) => UsuarioController.index(req, res))
router.post("/user/edit", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/edit", (req, res) => UsuarioController.usuariEditView(req, res))

router.get("/user/atendimento", (req, res) => AtendimentoController.index(req, res))

module.exports = router