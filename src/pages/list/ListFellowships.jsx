import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable-bacontas/Datatable"
import Widget from "../../components/widget/FellowshipWidget"


const ListFellowships = () => {
   
    
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets" >
          <Widget type="fellowship"  />
        </div>
        </div>
    </div>
  )
}

export default ListFellowships;