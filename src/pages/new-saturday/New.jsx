import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext,useEffect } from "react";
//import { UserContext } from "../../context/user.context";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc, getDoc, admin, getDocs } from "@firebase/firestore";
import { nanoid } from 'nanoid';



const defaultSaturdayFields = {
  id: nanoid(7),
  date: "",
  attendance: "",
  campusAttendance: ''
};

const NewSaturday = ({ title }) => {

  const  campusCollectionRef = collection(db, "campus")
  const[campus, setCampus] = useState([])  

useEffect(() => {
  const getCampusDocuments = async () => {
    const querySnapshot = await getDocs(campusCollectionRef);

    setCampus(querySnapshot.docs.map((doc)=>({...doc.data()})))
  }
  getCampusDocuments();
}, [])

console.log(campus);

  const [saturday, setSaturday] = useState(defaultSaturdayFields);

  const { id,
    date,
    attendance,
    campusAttendance,
  } = saturday;

  const saturdayInputs = [
    {
      id: 1,
      label: "Date of Service",
      type: "date",
      name: "date",
      value: date,
    },
    {
      id: 2,
      label: " Total Attendance",
      type: "text",
      name: "attendance",
      value: attendance,
    },
  ];

  const campusInputs = [
    {
      id: nanoid(7),
      label: `${campus.name}`,
      type: "text",
      name: `${campus.name}`,
      value: campus.name,
    } 
  ];


  const usersCollectionRef = collection(db, "saturday");



  const resetSaturdayFields = () => {
    setSaturday(defaultSaturdayFields);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const saturdayDetails = {
      id,
      date,
      attendance,
      campusAttendance,
    }

    try {
      const docRef = addDoc(collection(db, "saturday"), saturdayDetails);
      console.log("Document written with ID: ", docRef.id);
      resetSaturdayFields();

    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }



  const handleChange = (event) => {
    const { name, value } = event.target;

    setSaturday({ ...saturday, [name]: value, });
    console.log(saturday)
  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              {saturdayInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} name={input.name} value={input.value} />
                </div>
              ))}
              {campus.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.name}</label>
                <input onChange={handleChange} type="text" name={input.name} value={input.value} />
              </div>
              ))}
              <button type="submit" >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSaturday;





