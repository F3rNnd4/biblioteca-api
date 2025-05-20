import prisma from "../../prisma/prisma.js";

class LivroModel {
  // Obter todos os livros
  async findAll() {
    const livros = await prisma.livro.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return livros;
  }

  // Obter um livro pelo ID
  async findById(id) {
    const livro = await prisma.livro.findUnique({
      where: {
        id: Number(id),
      },
    });

    return livro;
  }

  // Criar um novo livro
  async create(
    titulo,
    isbn,
    dataPublicacao,
    autorId
  ) {
    const novoLivro = await prisma.livro.create({
      data: {
        titulo,
        isbn,
        dataPublicacao,
        autorId: Number(autorId),
      },
    });

    return novoLivro;
  }

  // Atualizar um livro existente
  async update(
    id,
    titulo,
    isbn,
    dataPublicacao,
    autorId
  ) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    // Atualize o livro existente com os novos dados
    const data = {};
    if (titulo !== undefined) {
      data.titulo = titulo;
    }
    if (isbn !== undefined) {
      data.isbn = isbn;
    }
    if (dataPublicacao !== undefined) {
      data.dataPublicacao = dataPublicacao;
    }

    const livroAtualizado = await prisma.livro.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return livroAtualizado;
  }

  // Remover um livro
  async delete(id) {
    const livro = await this.findById(id);

    if (!livro) {
      return null;
    }

    await prisma.livro.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new LivroModel();