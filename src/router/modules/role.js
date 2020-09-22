const roleRouter = {
    path: "roles/",
    component: () => import("@/App"),
    children: [
      {
        path: "/",
        name: "RoleIndex",
        component: () => import("@/views/roles/index")
      },
      {
        path: "roles/create",
        name: "RoleCreate",
        component: () => import("@/views/roles/components/create")
      },
      {
        path: "roles/edit/:id",
        name: "RoleEdit",
        component: () => import("@/views/roles/components/edit")
      }
    ]
  };
  export default roleRouter;
  