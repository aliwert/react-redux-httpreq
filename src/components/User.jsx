const User = ({ user }) => {
  return (
    <>
      <div style={{display: 'flex', gap: 20}}>
        <div>Id:{user.id}</div>
        <div>Name:{user.name}</div>
        <div>Username:{user.username}</div>
        <div>Email:{user.email}</div><br /><br />
        <div></div>
      </div>
    </>
  );
};

export default User;
