import { createContext, useContext } from "react";

interface IUserState {
  user: string | null;
}

const initialState = {
  user: null,
};

const MyContext = createContext<IUserState>(initialState);

const ShowUserComponents = () => {
  const ctx = useContext(MyContext);

  return <div>{ctx.user}</div>;
};

const UseContextComponents = () => {
  return (
    <MyContext.Provider value={{ user: "Jacson" }}>
      <div>
        <ShowUserComponents />
      </div>
    </MyContext.Provider>
  );
};

export default UseContextComponents;
