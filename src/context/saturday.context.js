import { createContext, useState, useEffect } from 'react';

export const  SaturdayContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
  });
  
  export const SaturdayProvider = ({ children }) => {
    const [saturday, setSaturday] = useState([]);
    const [attendance, setAttendance] = useState=(null);
    const [date, setDate] = useState=(null);
    const [topic, setTopic] = useState=(null);
    const [campusAttendance, setCampusAttendance] = useState=(null);
    
    const value = { currentUser, setCurrentUser };
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };