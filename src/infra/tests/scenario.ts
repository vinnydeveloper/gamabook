import db from "../../database";

export async function clearDatabase() {

  await Promise.all([
    db.usuarios.deleteMany({}),
    db.fotos.deleteMany({}),
    db.livros.deleteMany({}),
    db.categoria.deleteMany({})
  ])

}