import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { CampusContext } from "../../context/campus.context";
import { useState, useContext, useEffect } from "react";
import { db } from '../../utils/firebase/firebase.utils';
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditUser from "./EditUser";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  { field: 'name', headerName: 'Name of Campus', width: 200 },

  { field: 'chief', headerName: 'Chief Elder', width: 200 },

  { field: 'hostels', headerName: 'Hostels', width: 200 },

  { field: 'fellowships', headerName: 'Number of Fellowships', width: 200 }
]

const Datatable = (id) => {

  const [data, setData] = useState([]);

  const usersCollectionRef = collection(db, "campus")

  const handleDelete = async (id) => {
    const userDoc = doc(db, "campus", id);
    await deleteDoc(userDoc)
  }


  useEffect(() => {
    const getCampusDocuments = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getCampusDocuments();
  }, [])

  console.log(data)

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

  const handleOpen = async (id) => {
    setOpen(true)
  };

 
  const handleClose = () => setOpen(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (data) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }} >
              <div className="viewButton">View</div>
            </Link>
            <div className="viewButton" onClick={() => { handleOpen(data.id) } }>Edit</div>
            <div className="deleteButton" onClick={() => { handleDelete(data.id) }}>Delete</div>
            <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
             Edit campus Information
            </Typography>
            <EditUser campuses={data} />
          </Box>
        </Modal>
      </div>
          </div>
        );
      },
    },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Campuses
          <Link to="/campus/new-campus" className="link">
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
