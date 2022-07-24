import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
//import { UserContext } from "../../context/user.context";
import { db } from '../../utils/firebase/firebase.utils';
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  {field: 'sheperdName', headerName: 'Name', width: 200},

  {field: 'sheperdNumber', headerName: 'Number', width: 250},

  {field: 'sheperdCampus', headerName: 'Campus', width: 250},
  
  {field: 'assignedHostel', headerName: 'AssignedHostel', width: 150}
]

const Datatable = () => {

 const  usersCollectionRef = collection(db, "sheperd")
  
    const [data, setData] = useState([]);

  useEffect(() => {
    const getCategoriesAndDocuments = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      setData(querySnapshot.docs.map((doc)=>({...doc.data()})))
    
    }
    getCategoriesAndDocuments();
  }, [usersCollectionRef])
  
  const rowData= data?.map(dat=>{
    return {
      sheperdName:dat?.sheperdName,
      id:dat?.id,
      sheperdNumber:dat?.sheperdNumber,
      sheperdCampus:dat?.sheperdCampus,
      assignedHostel:dat?.assignedHostel
    }
  })

  // const handleDelete = (id) => {
  //   // setData(data.filter((item) => item.id !== id));
  // };

  const handleDelete = async (id) => {
    const userDoc = doc(db, "campus", id);
    await deleteDoc(userDoc)
  }  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete()}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Sheperds
        <Link to="/users/new-sheperd" className="link">
          Add New Sherperd
        </Link>
      </div>
       <DataGrid
        className="datagrid"
        rows={rowData}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
