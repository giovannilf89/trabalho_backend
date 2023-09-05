import { Router } from "express";

import { CriarUsuarioController } from "./controllers/usuarios/CriarUsuarioController";
import { DeletarUsuarioController } from "./controllers/usuarios/DeletarUsuarioController";
import { ExibirUsuarioController } from "./controllers/usuarios/ExibirUsuarioController";

import { CriarClienteController } from "./controllers/clientes/CriarClienteController";
import { ExibirClienteController } from "./controllers/clientes/ExibirClienteController";
import { DeletarClienteController } from "./controllers/clientes/DeletarClienteController";

import { CriarProdutoController } from "./controllers/produtos/CriarProdutoController";
import { ExibirProdutoController } from "./controllers/produtos/ExibirProdutoController";
import { DeletarProdutoController } from "./controllers/produtos/DeletarProdutoController";

const rota = Router();

//Usuários
rota.post("/CriarUsuario", new CriarUsuarioController().handle);
rota.get("/ExibirUsuario", new ExibirUsuarioController().handle);
rota.delete("/DeletarUsuario", new DeletarUsuarioController().handle);

//Clientes
rota.post("/CriarCliente", new CriarClienteController().handle);
rota.get("/ExibirCliente", new ExibirClienteController().handle);
rota.delete("/DeletarCliente", new DeletarClienteController().handle);

//Produto
rota.post("/CriarProduto", new CriarProdutoController().handle);
rota.get("/ExibirProduto", new ExibirProdutoController().handle);
rota.delete("/DeletarProduto", new DeletarProdutoController().handle);

export { rota };
