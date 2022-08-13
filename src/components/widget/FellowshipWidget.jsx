import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { db } from "../../utils/firebase/firebase.utils"
import { getFirestore, collection, writeBatch, query, getDocs, querySnapshot, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react"



const Widget = ({ type }) => {

    const [dat, setDat] = useState([]);

    const usersCollectionRef = collection(db, "campus")
  
  
    useEffect(() => {
      const getCampusDocuments = async () => {
        const querySnapshot = await getDocs(usersCollectionRef);
  
        setDat(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  
      }
      getCampusDocuments();
    }, [])
  
    let data
  //temporary
  const amount = 100;
  const diff = 20;

  const rowData = dat?.map(dat => {
    return {
      name: dat?.name,
      id: dat?.id,
      chief: dat?.chief,
      hostels: dat?.hostels,
      fellowships: dat?.fellowships
    }
  })
  
  console.log(rowData)
  console.log(dat)
  switch (type) {
    case "fellowship":
      data = {
        title: dat.name,
        link: "See all fellowships",
      };
      break;
    default:
      break;
  }

  return (
    <>
        {dat.map((da) => {
            return (
                <div className="widget">
                <div className="left">
                <span className="title">{da.name}</span>
                <span className="counter">
                   {da.fellowships}
                </span>
                <span className="link">See all fellowships</span>
              </div>
              <div className="right">
                <div className="percentage positive">
                  <KeyboardArrowUpIcon />
                   
                </div>
                {<PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />}
              </div>
              </div>
            )
        })}
    </>
  );
};

export default Widget;
