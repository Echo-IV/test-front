import React, { useEffect, useState } from "react";

import { getUsers } from "../../services/users";
import UserItem from "./UserItem";
import { Wrapper } from "./User.styled";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return <UserItem user={user} />;
    });
  };

  return <Wrapper>{renderUsers()}</Wrapper>;
};

export default Users;
