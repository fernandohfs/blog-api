import PostsController from "./posts.controller";
import * as Schemas from "./posts.schemas";

export default [
  {
    method: "GET",
    path: "/v1/posts",
    handler: PostsController.list
  },
  {
    method: "POST",
    path: "/v1/posts",
    handler: PostsController.store,
    config: {
      validate: {
        payload: Schemas.payload
      }
    }
  },
  {
    method: "GET",
    path: "/v1/posts/{id}",
    handler: PostsController.detail,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  },
  {
    method: "PUT",
    path: "/v1/posts/{id}",
    handler: PostsController.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: "DELETE",
    path: "/v1/posts/{id}",
    handler: PostsController.destroy,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  }
];
