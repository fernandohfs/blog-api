import { instances } from "hapi-sequelizejs";

const { Tag } = instances.getModels();

export default new (class TagsDao {
  async findAll() {
    return await Tag.findAll({ attributes: { exclude: ["PostId"] } });
  }

  async create(postId, payload) {
    const tag = await Tag.create(payload);
    tag.setPost(postId);

    return tag;
  }

  async findById(id) {
    return await Tag.findByPk(id, { attributes: { exclude: ["PostId"] } });
  }

  async update(tag, id) {
    await Tag.update(tag, { where: { id } });

    return await this.findById(id);
  }

  async destroy(id) {
    await Tag.destroy({ where: { id } });
  }
})();
