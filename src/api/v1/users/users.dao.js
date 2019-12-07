import { instances } from "hapi-sequelizejs";

class UsersDao {
  constructor() {
    this.model = instances.getModel("User");
  }

  async create(payload) {
    return await this.model.create(payload);
  }
}

export default new UsersDao();
