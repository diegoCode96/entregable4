import User from "./User";

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate}) => {
  console.log(users);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
  );
};
export default UserList;
