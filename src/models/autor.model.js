import prisma from "../../prisma/prisma.js";

class AutorModel {
  // Obter todos os autores
  async findAll() {
    const autores = await prisma.autor.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return autores;
  }

  // Obter um autor pelo ID
  async findById(id) {
    const autor = await prisma.autor.findUnique({
      where: {
        id: Number(id),
      },
    });

    return autor;
  }

  // Criar um novo autor
  async create(
    nome,
    sobrenome,
    nacionalidade
  ) {
    const novoAutor = await prisma.autor.create({
      data: {
        nome,
        sobrenome,
        nacionalidade,
      },
    });

    return novoAutor;
  }

  // Atualizar um autor existente
  async update(
    id,
    nome,
    sobrenome,
    nacionalidade
  ) {
    const autor = await this.findById(id);

    if (!autor) {
      return null;
    }

    // Atualize o autor existente com os novos dados
    const data = {};
    if (nome !== undefined) {
      data.nome = nome;
    }
    if (nacionalidade !== undefined) {
      data.nacionalidade = nacionalidade;
    }

    const autorAtualizado = await prisma.autor.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return autorAtualizado;
  }

  // Remover um autor
  async delete(id) {
    const autor = await this.findById(id);

    if (!autor) {
      return null;
    }

    await prisma.autor.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new AutorModel();