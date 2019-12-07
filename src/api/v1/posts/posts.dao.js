import { instances } from "hapi-sequelizejs";

import { getObjectOr404 } from "../../utils/database.utils";

export default new (class PostsDao {
  constructor() {
    this.model = instances.getModel("Post");
    this.params = {
      include: ["tags"]
    };
  }

  async findAll() {
    return await this.model.findAll(this.params);
  }

  async create(post) {
    return await this.model.create(post);
  }

  async findById(id) {
    return await getObjectOr404(this.model, { ...this.params, where: { id } });
  }

  async update(data, id) {
    const post = await getObjectOr404(this.model, { where: { id } });

    return await post.update(data);
  }

  async destroy(id) {
    const options = {
      where: { id }
    };

    const post = await getObjectOr404(this.model, options);

    await post.destroy(options);
  }
})();
