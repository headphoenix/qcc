import { createContext, useState, useEffect } from 'react';

export const  FellowshipContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
  });
  
  export const FellowshipProvider = ({ children }) => {
    const [fellowship, setFellowship] = useState([]);
    const [attendance, setAttendance] = useState=(null);
    const [date, setDate] = useState=(null);
   
    const value = { currentUser, setCurrentUser };
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };