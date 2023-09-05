import prismaClient from "../../prisma";

class ExibirUsuarioServices {
  async execute() {
    const exibirUsuario = await prismaClient.user.findMany({});
    return exibirUsuario;
  }
}

export { ExibirUsuarioServices };
