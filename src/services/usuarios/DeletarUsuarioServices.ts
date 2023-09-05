import prismaClient from "../../prisma";

interface DeletarUsuarios {
  id: string;
}

class DeletarUsuarioServices {
  async execute({ id }: DeletarUsuarios) {
    await prismaClient.user.delete({
      where: {
        id: id,
      },
    });
    return { dados: "Registro apagado com sucesso" };
  }
}

export { DeletarUsuarioServices };
