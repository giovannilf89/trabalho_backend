import prismaClient from "../../prisma";

interface CriarClientes {
  nome: string;
  cpf: string;
  rg: string;
  celular: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class CriarClienteServices {
  async execute({
    nome,
    cpf,
    rg,
    celular,
    rua,
    complemento,
    bairro,
    cidade,
    estado,
  }: CriarClientes) {
    if (
      !nome ||
      !cpf ||
      !rg ||
      !celular ||
      !rua ||
      !complemento ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      throw new Error("Campos em Branco");
    }

    const docCadastrado = await prismaClient.client.findFirst({
      where: {
        OR: [
          {
            cpf: cpf,
          },
          {
            rg: rg,
          },
        ],
      },
    });
    if (docCadastrado) {
      throw new Error("CPF ou RG ja cadastrado");
    }

    await prismaClient.client.create({
      data: {
        nome: nome,
        cpf: cpf,
        rg: rg,
        celular: celular,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
    });
    return { data: "Dados salvos com sucesso" };
  }
}

export { CriarClienteServices };
