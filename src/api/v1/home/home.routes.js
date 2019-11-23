export default [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => h.response({ message: "Hello :)" })
  }
];
