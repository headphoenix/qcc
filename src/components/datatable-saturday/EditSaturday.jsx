import "../../pages/new-campus/new.scss";
import { useState, useEffect } from "react";
import { collection, getDocs,} from "firebase/firestore";
import { doc, updateDoc, setDoc } from "firebase/firestore"; 
import { db } from "../../utils/firebase/firebase.utils"; 


const EditSaturday = ({saturdays}) => {

      const defaultSaturdayFields = {
        id: saturdays.row.id,
        date: saturdays.row.date,
        attendace: saturdays.row.attendance,
        firsttimers: saturdays.row.firsttimers,
        newconverts: saturdays.row.newconverts,
      };

      const [campusAttend, setCampusAttend] = useState([]);

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
          type: "number",
          name: "attendance",
          value: attendance,
        },
        {
          id: 2,
          label: "First Timers",
          type: "number",
          name: "firsttimers",
          value: firsttimers,
        },
        {
          id: 2,
          label: " New Converts",
          type: "number",
          name: "newconverts",
          value: newconverts,
        },
      ];

      const campusCollectionRef = collection(db, "campus")
      const [campus, setCampus] = useState([])
    
      useEffect(() => {
        const getCampusDocuments = async () => {
          const querySnapshot = await getDocs(campusCollectionRef);
    
          setCampus(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
        }
        getCampusDocuments();
      }, [])

   

    const [saturday, setSaturday] = useState(defaultSaturdayFields);
    
    const { 
      id,
      date,
      attendance,
      campusAttendance,
      firsttimers,
      newconverts
    } = saturday;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedSaturday = {
          id: id,
          date: date,
          attendace: attendance,
          firsttimers: firsttimers,
          newconverts: newconverts,
        }
        await setDoc(doc(db, "saturday", saturday.id), updatedSaturday);
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setSaturday({ ...saturday, [name]: value, });
        };

        const campusChange = (event) => {
          const { name, value } = event.target;
      
          setCampusAttend({ ...campusAttend, [name]: value, });
          console.log(campusAttend)
         }
       
    return (
    <div>
       <div className="right">
       <form onSubmit={handleSubmit}>
              {saturdayInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} name={input.name} value={input.value} />
                </div>
              ))}
              <h2>Attendance for Individual Campuses</h2><br/>
              {campus.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.name}</label>
                <input onChange={campusChange} type="number" name={input.name} value={input.value} />
              </div>
              ))}
              <button type="submit" >Send</button>
            </form>
          </div>
    </div>
    )
}


export default EditSaturday;