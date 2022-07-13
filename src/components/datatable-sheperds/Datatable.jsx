import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

const Datatable = () => {
  const { categoriesMap } = useContext(UserContext);
  const [data, setData] = useState(Object.keys(categoriesMap))


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
        Sheperds
        <Link to="/users/new-sheperd" className="link">
          Add New Sherperd
        </Link>
      </div>
      {Object.keys(categoriesMap).map((title) => {
       return (
       <DataGrid
        key={title.id}
        className="datagrid"
        rows={title}
        columns={categoriesMap[title].concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
       )
      })}
    </div>
  );
};

export default Datatable;
