import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc, getDoc, admin } from "@firebase/firestore";
import {nanoid} from 'nanoid';

const defaultSheperdFields = {
  id: nanoid(7),
  sheperdName: "",
  sheperdNumber: "",
  sheperdCampus: "",
  assignedHostel: "",
};

const NewSheperd = ({ title }) => {
  const [sheperd, setSheperd] = useState(defaultSheperdFields);

  const {id,
         sheperdName,
         sheperdNumber,
         sheperdCampus,
         assignedHostel,
         } = sheperd;

         const userInputs = [
          {
            id: 1,
            label: "Full name",
            type: "text",
            placeholder: "John Doe",
            name:"sheperdName",
            value: sheperdName,
          },
          {
            id: 2,
            label: "Phone",
            type: "text",
            placeholder: "+1 234 567 89",
            name:"sheperdNumber",
            value: sheperdNumber,
          },
          {
            id: 3,
            label: "Campus",
            type: "text",
            placeholder: "University of Ghana",
            name:"sheperdCampus",
            value: sheperdCampus,
          },
          {
            id: 4,
            label: " Assigned Hostel",
            type: "text",
            placeholder: "Evandy Hostel",
            name:"assignedHostel",
            value: assignedHostel,
          },
        ];

  const usersCollectionRef = collection(db, "sheperd");



const resetSheperdFields = () => {
  setSheperd(defaultSheperdFields);
};


const handleSubmit = (event) => {
  event.preventDefault();
  
  const sheperdDetails = {
    id,
    sheperdName,
    sheperdNumber, 
    sheperdCampus,
    assignedHostel,
  }
  
  try {
    const docRef = addDoc(collection(db, "sheperd"), sheperdDetails);
    console.log("Document written with ID: ", docRef.id);
    resetSheperdFields();
  
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}



const handleChange = (event) => {
  const { name, value } = event.target;

  setSheperd({ ...sheperd, [name]: value, });
  console.log(sheperd)
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
              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} name={input.name} value={input.value}/>
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

export default NewSheperd;





