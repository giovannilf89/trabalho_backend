import prismaClient from "../../prisma";

interface DeletarCliente {
  id: string;
}

class DeletarClienteServices {
  async execute({ id }: DeletarCliente) {
    await prismaClient.client.delete({
      where: {
        id: id,
      },
    });
    return { dados: "Registro apagado com sucesso" };
  }
}

export { DeletarClienteServices };
