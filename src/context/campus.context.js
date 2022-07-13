import { createContext, useState, useEffect } from 'react';
import { getCampusDocuments } from "../utils/firebase/firebase.utils";

export const CampusContext = createContext({
  campusesMap: {},
  });
  
  export const CampusProvider = ({ children }) => {
    const [campusesMap, setCampusesMap] = useState({});
    
    useEffect(() => {
      const getCampusesMap = async () => {
        const campusMap = await getCampusDocuments();
        setCampusesMap(campusMap);
      };
  
      getCampusesMap();
    }, []);
    
    const value = { campusesMap };
  
    return <CampusContext.Provider value={value}>{children}</CampusContext.Provider>;
  };