import { Request, Response } from "express";
import { ExibirProdutoServices } from "../../services/produtos/ExibirProdutoServices";

class ExibirProdutoController {
  async handle(req: Request, res: Response) {
    const exibirProdutoServices = new ExibirProdutoServices();
    const produto = await exibirProdutoServices.execute();
    return res.json(produto);
  }
}

export { ExibirProdutoController };
