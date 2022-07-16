import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, query, getDocs } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyCHbB6GD6sGjiD9GSNj8Th2HBHqJRUdRRI",
//     authDomain: "qcc-wow.firebaseapp.com",
//     projectId: "qcc-wow",
//     storageBucket: "qcc-wow.appspot.com",
//     messagingSenderId: "1055921673312",
//     appId: "1:1055921673312:web:f62c5501743afe7b821f05"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDRvpRCd2h-sr4ErzZnyO-bCLnWfKIYjeg",
  authDomain: "qcc-test-43fc5.firebaseapp.com",
  projectId: "qcc-test-43fc5",
  storageBucket: "qcc-test-43fc5.appspot.com",
  messagingSenderId: "557781997409",
  appId: "1:557781997409:web:b544e1e53cf3db28bd5720"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  export const getMembersDocuments = async () => {
    const collectionRef = collection(db, 'member');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const memberMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items} = docSnapshot.data();
      acc[title] = items;
      return acc;
    }, {});
    
    return memberMap; 
  }

  export const getCampusDocuments = async () => {
    const collectionRef = collection(db, 'campus');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const campusMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items} = docSnapshot.data();
      acc[title] = items;
      return acc;
    }, {});
    
    return campusMap; 
  }