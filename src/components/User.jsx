const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  const handleClickDelete = () => {
    deleteUser(user.id);
  };

  const handleClickUpdate = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <article className="border-2 p-2  flex flex-col gap-4 m-4 ">
      <div className="h-14 flex justify-center items-center p-2">
      <h4 className="text-center text-2xl text-[#0F0F2D] capitalize">
        {user.first_name} {user.last_name}
      </h4>
      </div>
      <div className="border-b-[1px] border-[#E5E5E5] "></div>
      <div className="h-10">
        <h5 className="text-[#D3D3D3] uppercase text-[16px]">Correo</h5>
        <span>{user.email}</span>
      </div>
      <div>
        <h5 className="text-[#D3D3D3] uppercase text-[16px]">Cumpleaños</h5>
        <span>
          <i className="bx bx-gift"></i>
          {user.birthday || "Sin fecha"}
        </span>
      </div>
      <div className="border-b-[1px] border-[#E5E5E5]"></div>
      <div className="self-end flex gap-3 ">
      <button className="bg-secondary w-10 h-10 grid place-content-center text-white text-2xl rounded-md" onClick={handleClickDelete}>
        <i className="bx bx-trash"></i>
      </button>
      <button className="bg-[#F7F7F7] w-10 h-10 grid place-content-center text-gray-300 text-2xl rounded-md" onClick={handleClickUpdate}>
        <i className="bx bx-pencil"></i>
      </button>
      </div>
    </article>
  );
};
export default User;
