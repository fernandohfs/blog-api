import { instances } from "hapi-sequelizejs";

import { getObjectOr404 } from "../../utils/database.utils";

export default new (class TagsDao {
  constructor() {
    this.model = instances.getModel("Tag");
    this.params = {
      include: ["post"]
    };
  }

  async findAll() {
    return await this.model.findAll(this.params);
  }

  async create(postId, payload) {
    const tag = await this.model.create(payload);
    tag.setPost(postId);

    return tag;
  }

  async findById(id) {
    return await getObjectOr404(this.model, { ...this.params, where: { id } });
  }

  async update(data, id) {
    const tag = await getObjectOr404(this.model, { where: { id } });

    return await tag.update(data);
  }

  async destroy(id) {
    const options = {
      where: { id }
    };

    const tag = await getObjectOr404(this.model, options);

    await tag.destroy(options);
  }
})();
