import "../../pages/new-campus/new.scss";
import { useState, useEffect } from "react";
import { collection, getDocs,} from "firebase/firestore";
import { db } from '../../utils/firebase/firebase.utils'


const EditSheperd = ({sheperds}) => {

      const defaultSheperdFields = {
        id: sheperds.id,
        sheperdName: sheperds.sheperdName,
        sheperdNumber: sheperds.sheperdNumber,
        sheperdCampus: sheperds.sheperdCampus,
        assignedHostel: sheperds.assignedHostel,
      };

      const campusCollectionRef = collection(db, "campus")
      const [campus, setCampus] = useState([])
    
      useEffect(() => {
        const getCampusDocuments = async () => {
          const querySnapshot = await getDocs(campusCollectionRef);
    
          setCampus(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
        }
        getCampusDocuments();
      }, [])

   

    const [sheperd, setSheperd] = useState(defaultSheperdFields);
    
    const { id,
      sheperdName,
      sheperdNumber,
      sheperdCampus,
      assignedHostel,
    } = sheperd;


    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setSheperd({ ...sheperd, [name]: value, });
        console.log(campus)
        };

        const userInputs = [
          {
            id: 1,
            label: "Full name",
            type: "text",
            placeholder: "John Doe",
            name: "sheperdName",
            value: sheperdName,
          },
          {
            id: 2,
            label: "Phone",
            type: "text",
            placeholder: "+1 234 567 89",
            name: "sheperdNumber",
            value: sheperdNumber,
          },
          {
            id: 4,
            label: " Assigned Hostel",
            type: "text",
            placeholder: "Evandy Hostel",
            name: "assignedHostel",
            value: assignedHostel,
          },
        ];

    return (
    <div>
       <div className="right">
            <form onSubmit={handleSubmit}>
              {userInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.name} type={input.type} value={input.value} onChange={handleChange} />
                </div>
              ))}
              <div className="formInput" >
                <label>Campus</label>

                <select className="formInput" onChange={handleChange} name={sheperdCampus} value={sheperdCampus}>
                  {campus?.map((input) =>
                    <option key={input.id} name={sheperdCampus} value={input.name}>{input.name}</option>)}
                </select>;
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
    </div>
    )
}


export default EditSheperd;