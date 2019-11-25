import { CREATED, NO_CONTENT, NOT_FOUND } from "http-status";

import TagsDao from "./tags.dao";
import PostsDao from "../posts/posts.dao";

export default new (class TagsController {
  async list(request, h) {
    const tags = await TagsDao.findAll();

    return h.response(tags);
  }

  async store(request, h) {
    const {
      params: { postId },
      payload
    } = request;

    const post = await PostsDao.findById(postId);

    if (!post) {
      return h.response({ message: "Post not found" }).code(NOT_FOUND);
    }

    const tag = await TagsDao.create(postId, payload);

    return h.response(tag).code(CREATED);
  }

  async detail(request, h) {
    const { id } = request.params;
    const tag = await TagsDao.findById(id);

    return h.response(tag);
  }

  async update(request, h) {
    const {
      params: { postId, id },
      payload
    } = request;

    const post = await PostsDao.findById(postId);

    if (!post) {
      return h.response({ message: "Post not found" }).code(NOT_FOUND);
    }

    const tag = await TagsDao.update(payload, id);

    return h.response(tag);
  }

  async destroy(request, h) {
    const { id } = request.params;
    await TagsDao.destroy(id);

    return h.response().code(NO_CONTENT);
  }
})();
