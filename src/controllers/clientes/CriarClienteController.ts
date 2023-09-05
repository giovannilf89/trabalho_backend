import { Request, Response } from "express";
import { CriarClienteServices } from "../../services/clientes/CriarClienteServices";

class CriarClienteController {
  async handle(req: Request, res: Response) {
    const { nome, cpf, rg, celular, rua, complemento, bairro, cidade, estado } =
      req.body;

    const criarClienteServices = new CriarClienteServices();
    const clientes = await criarClienteServices.execute({
      nome,
      cpf,
      rg,
      celular,
      rua,
      complemento,
      bairro,
      cidade,
      estado,
    });
    return res.json(clientes);
  }
}

export { CriarClienteController };
