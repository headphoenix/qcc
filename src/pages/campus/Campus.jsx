import "./campus.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable-campus/Datatable"
import List from "../../components/table/Table"

const SaturdayService = () => {
    return ( 
         <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable />
      <List /> 
    </div>
  </div> );
}
 
export default SaturdayService;