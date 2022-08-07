
const Data = ({campuses}) => {
  
  console.log(campuses)
    return ( 
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
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Chief Elder:</span>
                  <span className="itemValue">{campuses.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Hostels</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Fellowships</span>
                  <span className="itemValue">
              
                  </span>
                </div>
                <div className="detailItem">
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default Data;