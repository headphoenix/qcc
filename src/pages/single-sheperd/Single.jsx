import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";

const SingleSheperd = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state)
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          { state && 
          <div className="left">
            <h1 className="title">Sheperd Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">{state.sheperdName}</h2>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{state.sheperdNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Campus:</span>
                  <span className="itemValue">
                    {state.sheperdCampus}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Assigned Hostel:</span>
                  <span className="itemValue">{state.assignedHostel}</span>
                </div>
              </div>
            </div>
          </div>}
          <div className="right">
            <Chart aspect={3 / 1} title="Fellowship Attendance" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default SingleSheperd;
