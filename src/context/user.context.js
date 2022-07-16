// import { createContext, useState, useEffect } from 'react';

// import { getCategoriesAndDocuments, getMembersDocuments } from '../utils/firebase/firebase.utils'

// export const UserContext = createContext({
//   categoriesMap: [],
//   membersMap: [],
// });

// export const UserProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState([]);
//   const [membersMap, setMembersMap] = useState([]);

//   useEffect(() => {
//     const getMembersMap = async () => {
//       const memberMap = await getMembersDocuments();
//       setCategoriesMap(memberMap);
//     };

//     getMembersMap();
//   }, []);

//   const value = { categoriesMap, setCategoriesMap, membersMap };
//   return (
//     <UserContext.Provider value={value}>
//       {children}
//     </UserContext.Provider>
//   );
// };