import { CREATED, NO_CONTENT } from "http-status";

import PostsDao from "./posts.dao";

export default new (class PostsController {
  async list(request, h) {
    const posts = await PostsDao.findAll();

    return h.response(posts);
  }

  async store(request, h) {
    const { payload } = request;
    const post = await PostsDao.create(payload);

    return h.response(post).code(CREATED);
  }

  async detail(request, h) {
    const { id } = request.params;
    const post = await PostsDao.findById(id);

    return h.response(post);
  }

  async update(request, h) {
    const {
      params: { id },
      payload
    } = request;
    const post = await PostsDao.update(payload, id);

    return h.response(post);
  }

  async destroy(request, h) {
    const { id } = request.params;
    await PostsDao.destroy(id);

    return h.response().code(NO_CONTENT);
  }
})();
