import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import LegalNotice from "./pages/LegalNotice";
import MyCourses from "./pages/MyCourses";
import Drivers from "./pages/Drivers";
import FormUserEdit from "./components/Forms/FormUserEdit"
// import userEdit from "./pages/UserEdit";


import Main from "./pages/Main";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Main />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/legalNotice" component={LegalNotice} />
        <Route exact path="/myCourses" component={MyCourses} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/user-edit" component={FormUserEdit} />

        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
