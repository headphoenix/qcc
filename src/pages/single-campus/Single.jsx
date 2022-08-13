import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Data from "./Data";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";

const SingleCampus = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state)
  //console.log(data)
 
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
         <Data campuses={state}/>
          <div className="right">
            <Chart aspect={3 / 1} title="Saturday Service Attendance" />
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default SingleCampus;
