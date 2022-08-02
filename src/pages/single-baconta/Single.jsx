import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleBacontas = ({campuses}) => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src=""
                alt={`Picture of ${campuses.name}`}
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{campuses.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Chief Elder:</span>
                  <span className="itemValue">{campuses.chief}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Hostels</span>
                  <span className="itemValue">{campuses.hostels}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Fellowships</span>
                  <span className="itemValue">
                    {campuses.fellowships}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
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

export default SingleBacontas;
