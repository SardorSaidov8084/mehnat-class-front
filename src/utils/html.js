export const getBadge = status => {
  switch (status) {
    case 1:
      return "success";
    case 0:
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      "primary";
  }
};
