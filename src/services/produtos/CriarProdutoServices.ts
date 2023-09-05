import prismaClient from "../../prisma";

interface CriarProduto {
  nome: string;
  fabricante: string;
  quantidade: string;
  preco: string;
}

class CriarProdutoServices {
  async execute({ nome, fabricante, quantidade, preco }: CriarProduto) {
    if (!nome || !fabricante || !quantidade || !preco) {
      throw new Error("Existem campos em Branco");
    }

    await prismaClient.product.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        quantidade: quantidade,
        preco: preco,
      },
    });
    return { dados: "Produto Cadastrado com sucesso" };
  }
}
export { CriarProdutoServices };
