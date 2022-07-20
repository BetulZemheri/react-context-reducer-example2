import User from '../components/User';
import { useUserContext } from '../context/UserContextProvider';

const ShowUsers = () => {
  //? users bilgisini context'den okuduk
  const { users } = useUserContext();
  return (
    <div style={{textAlign: "center", color: "red"}}>
      <h1 style={{color: "black"}}>USER LIST</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;