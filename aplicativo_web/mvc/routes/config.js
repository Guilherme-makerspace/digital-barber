const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", UsuarioController.index)
router.get("/user/index", AtendimentoController.index)

module.exports = router