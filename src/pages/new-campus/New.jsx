import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { CampusContext } from "../../context/user.context";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc, getDoc, admin } from "@firebase/firestore";
import { nanoid } from "nanoid";


const defaultCampusFields = {
  id: nanoid(7),
  name: "",
  chief: "",
  hostels: "",
  fellowships: "",
};

const NewCampus = ({ title }) => {
  const [campus, setCampus] = useState(defaultCampusFields);

  const {id,
    name,
    chief,
    hostels,
    fellowships,
    } = campus;


    const campusInputs = [
      {
        id: 1,
        label: "Name of Campus",
        type: "text",
        name:"name",
        value: name,

      },
      {
        id: 2,
        label: "Chief Elder",
        type: "text",
        name:"chief",
        value: chief,
      },
      {
        id: 3,
        label: "Number of Hostels",
        type: "text",
        name:"hostels",
        value: hostels,
      },
      {
        id: 4,
        label: "Number of Fellowships",
        type: "number",
        name:"fellowships",
        value: fellowships,
      },
    ];

const usersCollectionRef = collection(db, "campus");

const resetCampusFields = () => {
  setCampus(defaultCampusFields);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const campusDetails = {
      id,
      name,
      chief,
      hostels,
      fellowships,
    }
    
    try {
      const docRef = addDoc(collection(db, "campus"), campusDetails);
      console.log("Document written with ID: ", docRef.id);
      resetCampusFields();
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

const handleChange = (event) => {
const { name, value } = event.target;

setCampus({ ...campus, [name]: value, });
console.log(campus)
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
          <div className="right">
            <form onSubmit={handleSubmit}>
              {campusInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} name={input.name} value={input.value} onChange={handleChange} />
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampus;
