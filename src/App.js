import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListSheperds from "./pages/list/ListSheperds";
import Single from "./pages/single/Single";
import NewSherperd from "./pages/new-sheperd/New";
import NewMember from "./pages/new-member/New";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListMembers from "./pages/list/ListMembers";
import SaturdayService from "./pages/Saturday/Saturday";
import ListCampuses from "./pages/list/ListCampuses"
import NewCampus from "./pages/new-campus/New";
import NewSaturday from "./pages/new-saturday/New";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
          <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListSheperds />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new-sheperd"
                element={<NewSherperd title='Add New Sherperd' />}
              />
            </Route>
            <Route path="members">
              <Route index element={<ListMembers />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new-member"
                element={<NewMember title='Add New Campus'/>}
              />
            </Route>
            <Route path="campus">
              <Route index element={<ListCampuses />} />
              <Route path=":campusId" element={<Single />} />
              <Route
                path="new-campus"
                element={<NewCampus title="Add New Campus" />}
              />
            </Route>
            <Route path="saturday">
              <Route index element={<SaturdayService />} />
              <Route path=":saturdayId" element={<Single />} />
              <Route
                path="new-service"
                element={<NewSaturday title='Add Data for New Service' />}
              />
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
