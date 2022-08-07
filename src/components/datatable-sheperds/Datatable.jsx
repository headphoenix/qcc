import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
//import { UserContext } from "../../context/user.context";
import { db } from '../../utils/firebase/firebase.utils';
import { getFirestore, collection, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import RowData from "./RowData";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  {field: 'sheperdName', headerName: 'Name', width: 200},

  {field: 'sheperdNumber', headerName: 'Number', width: 250},

  {field: 'sheperdCampus', headerName: 'Campus', width: 250},
  
  {field: 'assignedHostel', headerName: 'AssignedHostel', width: 150},

]

const Datatable = () => {

 const  usersCollectionRef = collection(db, "sheperd")
  
    const [data, setData] = useState([]);

    const handleDelete = async (id) => {
      const userDoc = doc(db, "sheperd", id);
      //await console.log(userDoc)
     await deleteDoc(userDoc)
    }  


  useEffect(() => {
    const getCategoriesAndDocuments = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      setData(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id  })))
    }
    getCategoriesAndDocuments();
  }, [])
  
  console.log(data);

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

  // const handleDelete = async () => {
  //   await deleteDoc(doc(db, "", props.users.id));
  // };

// const dataID = data.id;


   // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (data) => {
        return (
         <RowData data={data}/>
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
