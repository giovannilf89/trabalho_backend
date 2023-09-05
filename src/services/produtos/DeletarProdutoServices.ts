import prismaClient from "../../prisma";

interface DeletarProduto {
  id: string;
}

class DeletarProdutoServices {
  async execute({ id }: DeletarProduto) {
    await prismaClient.product.delete({
      where: {
        id: id,
      },
    });
    return { dados: "Registro apagado com sucesso" };
  }
}

export { DeletarProdutoServices };
