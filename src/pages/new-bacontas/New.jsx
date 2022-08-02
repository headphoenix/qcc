import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { CampusContext } from "../../context/user.context";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc, getDoc, admin } from "@firebase/firestore";
import { nanoid } from "nanoid";


// const defaultCampusFields = {
//   id: nanoid(),
//   name: "",
//   chief: "",
//   hostels: "",
//   fellowships: "",
// };

const NewBacontas = ({ title }) => {
  
const defaultBacontaFields = {
  id: nanoid(),
  name: "",
  sheperd: "",
  numberofmembers: "",
};


  const [baconta, setBaconta] = useState(defaultBacontaFields);

  const {id,
    name,
    sheperd,
    numberofmembers,
    } = baconta;


    const bacontaInputs = [
      {
        id: 1,
        label: "Name of Baconta",
        type: "text",
        name:"name",
        value: name,

      },
      {
        id: 2,
        label: "Baconta Sheperd",
        type: "text",
        name:"sheperd",
        value: sheperd,
      },
      {
        id: 3,
        label: "Number of Members",
        type: "number",
        name:"numberofmembers",
        value: numberofmembers,
      },
    ];

const usersCollectionRef = collection(db, "baconta");

const resetBacontaFields = () => {
  setBaconta(defaultBacontaFields);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const bacontaDetails = {
      id,
      name,
      sheperd,
      numberofmembers,
    }
    
    try {
      const docRef = addDoc(collection(db, "baconta"), bacontaDetails);
      console.log("Document written with ID: ", docRef.id);
      resetBacontaFields();
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

const handleChange = (event) => {
const { name, value } = event.target;

setBaconta({ ...baconta, [name]: value, });
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
              {bacontaInputs.map((input) => (
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

export default NewBacontas;
