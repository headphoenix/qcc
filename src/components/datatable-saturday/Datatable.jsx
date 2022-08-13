import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { CampusContext } from "../../context/campus.context";
import { useState, useContext, useEffect } from "react";
//import { UserContext } from "../../context/user.context";
import { db } from '../../utils/firebase/firebase.utils';
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import RowData from './RowData';
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  {field: 'date', headerName: 'Date', width: 200},

  {field: 'attendance', headerName: 'Total Attendance', width: 200},

  {field: 'firsttimers', headerName: 'First Timers', width: 200},

  {field: 'newconverts', headerName: 'New Converts', width: 200},

]

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const  usersCollectionRef = collection(db, "saturday")

  useEffect(() => {
    const getCampusDocuments = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      setData(querySnapshot.docs.map((doc)=>({...doc.data()})))
    
    }
    getCampusDocuments();
  }, [])

  const rowData= data?.map(dat=>{
    return {
      name:dat?.name,
      id:dat?.id,
      attendance:dat?.attendance,
      // hostels:dat?.hostels,
      // fellowships:dat?.fellowships
    }
  })
  

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  
  // const handleDelete = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc)
  // }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <RowData data={data} />
          // <div className="cellAction">
          //   <Link to="/users/test" style={{ textDecoration: "none" }}>
          //     <div className="viewButton">View</div>
          //   </Link>
          //   <div className="viewButton">Edit</div>
          //   <div
          //     className="deleteButton"
          //     // onClick={() => handleDelete(params.row.id)}
          //   >
          //     Delete
          //   </div>
          // </div>
        );
      },
    },
  ];
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Saturday Service
        <Link to="/saturday/new-service" className="link">
          Add Data for New Service
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;





