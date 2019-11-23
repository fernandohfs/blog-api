import TagsController from "./tags.controller";
import * as Schemas from "./tags.schemas";

export default [
  {
    method: "GET",
    path: "/v1/posts/{postId}/tags",
    handler: TagsController.list
  },
  {
    method: "POST",
    path: "/v1/posts/{postId}/tags",
    handler: TagsController.store,
    config: {
      validate: {
        payload: Schemas.payload
      }
    }
  },
  {
    method: "GET",
    path: "/v1/posts/{postId}/tags/{id}",
    handler: TagsController.detail,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  },
  {
    method: "PUT",
    path: "/v1/posts/{postId}/tags/{id}",
    handler: TagsController.update,
    config: {
      validate: Schemas.update
    }
  },
  {
    method: "DELETE",
    path: "/v1/posts/{postId}/tags/{id}",
    handler: TagsController.destroy,
    config: {
      validate: {
        params: Schemas.params
      }
    }
  }
];
