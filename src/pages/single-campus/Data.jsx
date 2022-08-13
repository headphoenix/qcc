import { useLocation } from "react-router-dom";


const Data = ({campuses}) => {
 
    return ( 
        <>
       {campuses && 
       
       <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src=""
                alt='Picture of Campus'
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">{campuses.name}</h2>
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
                </div>
              </div>
            </div>
        </div>}
        </>
     );
}
 
export default Data;