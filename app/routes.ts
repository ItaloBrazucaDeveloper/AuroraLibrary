import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('layouts/center-children.layout.tsx', [
    index("routes/login.tsx"),
  ]),

  layout('layouts/workspace.layout.tsx', [
    route('/books/:bid?', 'routes/books.tsx'),
    route('/clients/:cid?', 'routes/clients.tsx'),
    route('/loans/:lid?', 'routes/loans.tsx'),
  ]),
] satisfies RouteConfig;
