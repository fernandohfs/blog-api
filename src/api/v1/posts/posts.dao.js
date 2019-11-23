import { instances } from "hapi-sequelizejs";

const { Post } = instances.getModels();

export default class PostsDao {
  async findAll() {
    return await Post.findAll();
  }

  async findById(id) {
    return await Post.findByPk(id);
  }
}
