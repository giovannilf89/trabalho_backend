import prismaClient from "../../prisma";

class ExibirClienteServices {
  async execute() {
    const clientes = await prismaClient.client.findMany({});
    return clientes;
  }
}

export { ExibirClienteServices };
