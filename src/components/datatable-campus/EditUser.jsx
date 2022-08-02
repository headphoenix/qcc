import "../../pages/new-campus/new.scss";
import { useState } from "react";





const EditUser = ({campuses}) => {

    const defaultCampusFields = {
        id: campuses.id,
        name: campuses.name,
        chief: campuses.chief,
        hostels: campuses.hostels,
        fellowships: campuses.fellowships
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
                  <input type={input.type} name={input.name} value={input.value} onChange={handleChange} />
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div>
    </div>
    )
}


export default EditUser;