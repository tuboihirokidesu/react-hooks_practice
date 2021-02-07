import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

type Props = {
  click: boolean | null;
};

const ConsumerComponentOne: React.FC<Props> = ({ click }) => {
  const user = useContext<UserState>(UserContext);

  return <div>{click ? user.first : user.last}</div>;
};
const ConsumerComponentTwo: React.FC = () => {
  const user = useContext<UserState>(UserContext);
  return (
    <>
      <div>First Name : {user.first}</div>
      <div>First Name : {user.last}</div>
    </>
  );
};

const UseContextComponents = () => {
  const [click, setClick] = useState<boolean>(false);
  const [user, setUser] = useState<UserState>({ first: "Jane", last: "Smith" });

  const handleChange = () => setClick(!click);
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponentOne click={click} />
      <button onClick={handleChange}>change adults</button>
      <ConsumerComponentTwo />
      <button onClick={() => setUser({ first: "Monkey", last: "Luffy" })}>
        change Name
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponents;
