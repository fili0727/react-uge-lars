


import { BaseProps } from "../types";
import { users as usersFromDB, User, getNextId } from "../data/data";
import { useState } from "react";
import Profile from "../components/Profile";
import UserForm from "../components/UserForm";
type Props = BaseProps;


export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId = getNextId();


  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
// clone users to get new array to trigger rerender
    setUsers([...users, newUser]);
    console.log(users);
  };


  return (
    <>
      <h2>{title}</h2>
    {users.map((user) => <Profile {...user} singleLine={true}  />)}
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
