import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { CampusContext } from "../../context/campus.context";
import { useState, useContext, useEffect } from "react";
import { db } from '../../utils/firebase/firebase.utils';
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import RowData from "./RowData";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  { field: 'name', headerName: 'Name of Campus', width: 200 },

  { field: 'chief', headerName: 'Chief Elder', width: 200 },

  { field: 'hostels', headerName: 'Hostels', width: 200 },

  { field: 'fellowships', headerName: 'Number of Fellowships', width: 200 }
]

const Datatable = (props) => {
console.log(props)
  const [data, setData] = useState([]);

  const usersCollectionRef = collection(db, "campus")




  useEffect(() => {
    const getCampusDocuments = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getCampusDocuments();
  }, [])

  //console.log(data)

  const rowData = data?.map(dat => {
    return {
      name: dat?.name,
      id: dat?.id,
      chief: dat?.chief,
      hostels: dat?.hostels,
      fellowships: dat?.fellowships
    }
  })

  const [open, setOpen] = useState(false);
  const [partData, setPartData] = useState([])

  

  

  const [dataSpec, setDataSpec] = useState([])
  
  const takeData = (id) => {
    if (data.id === id) {
      setDataSpec()
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (data) => {
      //  console.log(data)
        return (
         <RowData data={data}/>
        );
      },
    },
  ];

  


  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Campuses
          <Link to="/campuses/new-campus" className="link">
            Add New Campuses
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
    

    </>
  );
};

export default Datatable;
