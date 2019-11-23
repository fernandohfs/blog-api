import PostsDao from "./posts.dao";

export default new (class PostsController {
  constructor() {
    this.dao = new PostsDao();
  }

  async list(request, h) {
    const posts = await this.dao.findAll();
    return h.response(posts);
  }

  async detail(request, h) {
    const { id } = request.params;
    const post = await this.dao.findById(id);
    return h.response(post);
  }
})();
