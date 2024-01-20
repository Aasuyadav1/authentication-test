import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import {account} from '../Appwrite/SignIn.js'

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password); // Assuming login updates the user state
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle the error, e.g., display an error message to the user
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get(); // This is c
      console.log("login")
      setUser(loggedIn);
    } catch (err) {
        console.log("not login")
      setUser(null);
    }
  }
  
  useEffect(() => {
    init();
  }, []);
  

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
