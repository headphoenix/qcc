import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListSheperds from "./pages/list/ListSheperds";
import Single from "./pages/single/Single";
import NewSherperd from "./pages/new-sheperd/New";
import NewMember from "./pages/new-member/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListMembers from "./pages/list/ListMembers";
import SaturdayService from "./pages/Saturday/Saturday";
import ListCampuses from "./pages/list/ListCampuses"
import NewCampus from "./pages/new-campus/New";

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
                element={<NewSherperd inputs={userInputs} />}
              />
            </Route>
            <Route path="members">
              <Route index element={<ListMembers />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new-member"
                element={<NewMember inputs={userInputs} />}
              />
            </Route>
            <Route path="campus">
              <Route index element={<ListCampuses />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new-campus"
                element={<NewCampus inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="saturday">
              <Route index element={<SaturdayService />} />
              {/* <Route path=":userId" element={<Single />} />
              <Route
                path="new-member"
                element={<NewMember inputs={userInputs} />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
