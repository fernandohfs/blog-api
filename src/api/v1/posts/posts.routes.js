import PostsController from "./posts.controller";

export default [
  {
    method: "GET",
    path: "/v1/posts",
    handler: PostsController.list
  },
  {
    method: "POST",
    path: "/v1/posts",
    handler: PostsController.store
  },
  {
    method: "GET",
    path: "/v1/posts/{id}",
    handler: PostsController.detail
  },
  {
    method: "PUT",
    path: "/v1/posts/{id}",
    handler: PostsController.update
  },
  {
    method: "DELETE",
    path: "/v1/posts/{id}",
    handler: PostsController.destroy
  }
];
