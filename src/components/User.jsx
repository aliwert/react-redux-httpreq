const User = ({ user }) => {
  return (
    <>
      <div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div><br /><br />
        <div></div>
      </div>
    </>
  );
};

export default User;
