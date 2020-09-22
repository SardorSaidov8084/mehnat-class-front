export const users = {
  fields: [
    { key: "fullname", _style: "min-width:100px;" },
    { key: "username", _style: "min-width:200px" },
    { key: "age", _style: "min-width:200px" },
    { key: "role", _style: "min-width:200px" },
    { key: "status", _style: "min-width:100px;" },
    {
      key: "show_details",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
export const roles = {
  fields: [
    { key: "name", _style: "min-width:100px;" },
    { key: "slug", _style: "min-width:200px" },
    { key: "created_at", _style: "min-width:200px" },
    {
      key: "show_details",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
