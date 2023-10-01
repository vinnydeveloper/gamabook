import db from "../../database";
import LivroRepository from "./LivroRepository";

const livroRepository = new LivroRepository(db)


export { livroRepository }