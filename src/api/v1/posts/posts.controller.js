import PostsDao from "./posts.dao";

export default new (class PostsController {
  async list(request, h) {
    const posts = await PostsDao.findAll();
    return h.response(posts);
  }

  async detail(request, h) {
    const { id } = request.params;
    const post = await PostsDao.findById(id);
    return h.response(post);
  }
})();
