import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditUser from "./EditUser";
import { Link } from "react-router-dom";
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/firebase.utils';
import { useState } from "react"
import SingleCampus from '../../pages/single-campus/Single';


const RowData = ({data}) => {

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

      const [open, setOpen] = useState(false);
    
      const handleDelete = async (id) => {
        const userDoc = doc(db, "campus", id);
        await deleteDoc(userDoc)
      }

    const handleOpen = (id) => setOpen(true);
  const handleClose = () => setOpen(false);
      
    return ( 
        <div className="cellAction">
        <Link to="/campuses/campus" style={{ textDecoration: "none" }} >
          <div className="viewButton">View</div>
        </Link>
        <div className="viewButton" onClick={() => {handleOpen()}}>Edit </div>
        <div className="deleteButton" onClick={() => { handleDelete(data.id) }}>Delete</div>
        <SingleCampus data={data}/>
        <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"

    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         Edit campus Information
        </Typography>
        <EditUser campuses={data.row} />
      </Box>
    </Modal>
        
        <div>
  
  </div>
      </div>
     );
}
 
export default RowData;