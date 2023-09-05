import { Request, Response } from "express";
import { ExibirClienteServices } from "../../services/clientes/ExibirClienteServices";

class ExibirClienteController {
  async handle(req: Request, res: Response) {
    const exibirClienteServices = new ExibirClienteServices();
    const clientes = await exibirClienteServices.execute();
    return res.json(clientes);
  }
}

export { ExibirClienteController };
