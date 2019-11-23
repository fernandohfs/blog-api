import { instances } from "hapi-sequelizejs";

const { Post } = instances.getModels();

export default new (class PostsDao {
  async findAll() {
    return await Post.findAll();
  }

  async create(post) {
    return await Post.create(post);
  }

  async findById(id) {
    return await Post.findByPk(id);
  }

  async update(post, id) {
    await Post.update(post, { where: { id } });

    return await this.findById(id);
  }
})();
