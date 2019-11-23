import PostsController from "./posts.controller";

export default [
  {
    method: "GET",
    path: "/v1/posts",
    handler: PostsController.list
  },
  {
    method: "GET",
    path: "/v1/posts/{id}",
    handler: PostsController.detail
  }
];
