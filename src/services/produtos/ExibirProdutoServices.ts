import prismaClient from "../../prisma";

class ExibirProdutoServices {
  async execute() {
    const produto = await prismaClient.product.findMany({});
    return produto;
  }
}

export { ExibirProdutoServices };
