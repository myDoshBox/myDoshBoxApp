import React from "react";

export const UsersList = (props) => {
  const { user, user_id, name, phone, email, address, action } = props;
  return (
    <>
      <tr>
        <td className=" d-none d-md-table-cell text-small">{user}</td>
        <td className="d-none d-sm-table-cell text-small">{user_id}</td>
        <td className="d-none d-lg-table-cell text-small">{name}</td>
        <td className="text-small">{phone}</td>
        <td className="text-small">{email}</td>
        <td className="text-small">{address}</td>
        <td className="text-small">{action}</td>
      </tr>
    </>
  );
};
