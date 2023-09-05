import { Request, Response } from "express";
import { DeletarProdutoServices } from "../../services/produtos/DeletarProdutoServices";

class DeletarProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deletarProdutoServices = new DeletarProdutoServices();
    const apagar = await deletarProdutoServices.execute({
      id,
    });
    return res.json(apagar);
  }
}

export { DeletarProdutoController };
