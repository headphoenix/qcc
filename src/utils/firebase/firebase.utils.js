import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, query, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCHbB6GD6sGjiD9GSNj8Th2HBHqJRUdRRI",
    authDomain: "qcc-wow.firebaseapp.com",
    projectId: "qcc-wow",
    storageBucket: "qcc-wow.appspot.com",
    messagingSenderId: "1055921673312",
    appId: "1:1055921673312:web:f62c5501743afe7b821f05"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'sheperd');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items} = docSnapshot.data();
      acc[title] = items;
      return acc;
    }, {});
    
    return categoryMap; 
  }

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