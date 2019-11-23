import { instances } from "hapi-sequelizejs";

const { Tag, Post } = instances.getModels();

export default new (class TagsDao {
  async findAll() {
    return await Tag.findAll();
  }

  async create(postId, tag) {
    const tagx = await Tag.create(tag);

    tagx.setPost(postId);

    return tagx;
  }

  async findById(id) {
    return await Tag.findByPk(id);
  }

  async update(tag, id) {
    await Tag.update(tag, { where: { id } });

    return await this.findById(id);
  }

  async destroy(id) {
    await Tag.destroy({ where: { id } });
  }
})();
