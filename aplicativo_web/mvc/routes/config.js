const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", (req, res) => UsuarioController.index(req, res))

//Cadastro
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioCreateView(req, res))

//Atualizar
router.put("/user/edit", (req, res) => UsuarioController.usuarioPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UsuarioController.usuarioEditView(req, res))

//Listar
router.get("/user/list", (req, res) => UsuarioController.usuarioListView(req, res))

//Deletar
router.delete("/user/delete/:id", (req, res) => UsuarioController.usuarioDeleteAsync(req,res))


router.get("/user/atendimento", (req, res) => AtendimentoController.index(req, res))

module.exports = router