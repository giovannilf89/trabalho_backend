import { Request, Response } from "express";
import { ExibirUsuarioServices } from "../../services/usuarios/ExibirUsuarioServices";

class ExibirUsuarioController {
  async handle(req: Request, res: Response) {
    const exibirUsuarioServices = new ExibirUsuarioServices();
    const exibirUsuarios = await exibirUsuarioServices.execute();
    return res.json(exibirUsuarios);
  }
}

export { ExibirUsuarioController };
