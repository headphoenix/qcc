import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { memberColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { getMembersDocuments } from '../../utils/firebase/firebase.utils'

const Datatable = () => {
  const { membersMap } = useContext(UserContext);
  const [data, setData] = useState(Object.keys(membersMap))

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
        Members
        <Link to="/members/new-member" className="link">
          Add New Member
        </Link>
      </div>
      {Object.keys(membersMap).map((title) => {
       return (
       <DataGrid
        key={title.id}
        className="datagrid"
        rows={title}
        columns={membersMap[title].concat(actionColumn)}
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
