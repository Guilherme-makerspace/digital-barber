const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class UsuarioService {
  #usuarioSchema;

  constructor() {
    this.#usuarioSchema = UsuarioSchema;
  }

  async buscarUsuario(id) {
    const dado = await this.#usuarioSchema.findOne({ where: { id } });
    if (!dado) return null;

    // UsuarioModel: constructor(email, senha, nome)
    const usuario = new Usuario(dado.email, dado.password, dado.username);
    usuario.id = dado.id;

    return usuario;
  }

  async buscarTodosUsuarios() {
    const dados = await this.#usuarioSchema.findAll();

    return dados.map((dado) => {
      const usuario = new Usuario(dado.email, dado.password, dado.username);
      usuario.id = dado.id;
      return usuario;
    });
  }

  async cadastrarUsuario(username, email, senha) {
    // UsuarioModel: constructor(email, senha, nome)
    const usuario = new Usuario(email, senha, username);

    const created = await this.#usuarioSchema.create({
      username: usuario.nome,
      email: usuario.email,
      password: usuario.senha,
      // userType vai para defaultValue: 'user'
    });

    return created;
  }

  async atualizarUsuario(id, username, email, senha) {
    const existente = await this.buscarUsuario(id);
    if (!existente) return 0;

    const usernameFinal = username ?? existente.nome;
    const emailFinal = email ?? existente.email;
    const senhaFinal = senha ?? existente.senha;

    const affectedRows = await this.#usuarioSchema.update(
      {
        username: usernameFinal,
        email: emailFinal,
        password: senhaFinal,
      },
      { where: { id } }
    );

    return affectedRows;
  }

  async deletarUsuario(id) {
    const usuario = await this.#usuarioSchema.findOne({ where: { id } });
    if (!usuario) return 0;
    return await usuario.destroy();
  }
}

module.exports = UsuarioService;
