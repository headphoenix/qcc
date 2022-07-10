export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "number",
    headerName: "Number",
    width: 200,
  },

  {
    field: "campus",
    headerName: "Campus",
    width: 200,
  },
  {
    field: "hostel",
    headerName: "Assigned Hostel",
    width: 160,
  },
];

// Campus Columns
export const campusColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "chief",
    headerName: "Chief Elder",
    width: 200,
  },

  {
    field: "numberhostels",
    headerName: "Number of Hostels",
    width: 200,
  },
  {
    field: "numberfellowships",
    headerName: "Number of Fellowships",
    width: 200,
  },
];

// Members Columns

export const memberColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "number",
    headerName: "Number",
    width: 200,
  },

  {
    field: "campus",
    headerName: "Campus",
    width: 200,
  },
  {
    field: "hostel",
    headerName: "Hostel",
    width: 160,
  },
  {
    field: "roomnumber",
    headerName: "Room Number",
    width: 160,
  },  
  {
    field: "sheperd",
    headerName: "Sheperd",
    width: 160,
  },
];

// Saturday Service Columns

export const saturdayServe = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "attendance",
    headerName: "Total Attendance",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date of Service",
    width: 160,
  },
  {
    field: "campusattendance",
    headerName: "Attendance of Campuses",
    width: 160,
  },
];
// Fellowships 

export const fellowship = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "date",
    headerName: "Date of Service",
    width: 160,
  },
  {
    field: "fellowshipattendance",
    headerName: "Attendance of Fellowship",
    width: 160,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    number: "2000000",
    campus: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "passive",
    campus: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "pending",
    campus: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "active",
    campus: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "passive",
    campus: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "active",
    campus: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "passive",
    campus: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    number: "020000000",
    status: "active",
    campus: 36,
  },
 
];
