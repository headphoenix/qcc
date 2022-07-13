import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { db } from "../../utils/firebase/firebase.utils";
import { collection, addDoc, getDoc, admin } from "@firebase/firestore";


const defaultMemberFields = {
  memberName: '',
  memberNumber: '',
  memberCampus: '',
  hostel: '',
  roomNumber: '',
};


const NewMember = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [member, setMember] = useState(defaultMemberFields);



  const {memberName,
    memberNumber,
    memberCampus,
    hostel,
    roomNumber,
    } = member;

    const memberInputs = [
      {
        id: 1,
        label: "Full name",
        type: "text",
        name:"memberName",
        value: memberName,
      },
      {
        id: 2,
        label: "Phone",
        type: "text",
        name:"memberNumber",
        value: memberNumber,
      },
      {
        id: 3,
        label: "Campus",
        type: "text",
        name:"memberCampus",
        value: memberCampus,
      },
      {
        id: 4,
        label: "Hostel",
        type: "text",
        name:"hostel",
        value: hostel,
      },
      {
        id: 4,
        label: "Room Number",
        type: "text",
        name:"roomNumber",
        value: roomNumber,
      },
    ];

const usersCollectionRef = collection(db, "member");

const handleChange = (event) => {
const { name, value } = event.target;

setMember({ ...member, [name]: value, });
};

const resetMemberFields = () => {
setMember(defaultMemberFields);
};

const memberDetails = {
  memberName,
  memberNumber,
  memberCampus,
  hostel,
  roomNumber,
}
try {
const docRef = addDoc(collection(db, "member"), memberDetails);
console.log("Document written with ID: ", docRef.id);

} catch (e) {
console.error("Error adding document: ", e);
}


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
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              {memberInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMember;
