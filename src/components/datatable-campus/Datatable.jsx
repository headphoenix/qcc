import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CampusContext } from "../../context/campus.context";
import { getCampusDocuments } from '../../utils/firebase/firebase.utils'

const Datatable = () => {
  const { campusesMap } = useContext(CampusContext);
  const [data, setData] = useState(Object.keys(campusesMap))
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
              onClick={() => handleDelete(params.row.id)}
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
        Campuses
        <Link to="/campus/new-campus" className="link">
          Add New Campuses
        </Link>
        {Object.keys(campusesMap).map((title) => {
       return (
       <DataGrid
        key={title.id}
        className="datagrid"
        rows={title}
        columns={campusesMap[title].concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
       )
      })}
      </div>
    </div>
  );
};

export default Datatable;
