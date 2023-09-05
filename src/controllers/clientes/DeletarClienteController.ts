import { Request, Response } from "express";
import { DeletarClienteServices } from "../../services/clientes/DeletarClienteServices";

class DeletarClienteController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deletarClienteServices = new DeletarClienteServices();
    const apagar = await deletarClienteServices.execute({
      id,
    });
    return res.json(apagar);
  }
}

export { DeletarClienteController };
