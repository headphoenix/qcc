import "../../pages/new-campus/new.scss";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../utils/firebase/firebase.utils"; 




const EditUser = ({campuses}) => {

  console.log(campuses)

    const defaultCampusFields = {
        id: campuses.row.id,
        name: campuses.row.name,
        chief: campuses.row.chief,
        hostels: campuses.row.hostels,
        fellowships: campuses.row.fellowships
      };


    const [campus, setCampus] = useState(defaultCampusFields);

    const {id,
        name,
        chief,
        hostels,
        fellowships,
        } = campus;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
          id: id,
          name: name,
          chief: chief,
          hostels: hostels,
          fellowships: fellowships,
        }
        await setDoc(doc(db, "campus", campuses.id), {
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
        
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setCampus({ ...campus, [name]: value, });
        console.log(campus)
        };

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


    return (
    <div>
       <div className="right">
            <form onSubmit={handleSubmit}>
              {campusInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.name} type={input.type} value={input.value} onChange={handleChange} />
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
    </div>
    )
}


export default EditUser;