import { Request, Response } from "express";
import { DeletarUsuarioServices } from "../../services/usuarios/DeletarUsuarioServices";

class DeletarUsuarioController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deletarUsuarioServices = new DeletarUsuarioServices();
    const apagar = await deletarUsuarioServices.execute({
      id,
    });
    return res.json(apagar);
  }
}

export { DeletarUsuarioController };
