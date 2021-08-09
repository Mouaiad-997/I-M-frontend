
import SplashScreen from "./Pages/SplashScreen/index.jsx";
import LoginPage from "./Pages/LoginPage/index.jsx";
import SignupPage from "./Pages/SignupPage/index.jsx";
import MainPage from "./Pages/MainPage/index.jsx";
import WomenPage from "./Pages/WomenPage/index.jsx";
import BoysPage from "./Pages/BoysPage/index.jsx";
import MenPage from "./Pages/MenPage/index.jsx";
import GirlsPage from "./Pages/GirlsPage/index.jsx";
import Dashboard from "./components/dashboard.js";
import AddCategory from "./components/addcategorie.js";
import UpdatePage from "./components/updatepage.js";
import AccountPage from "./Pages/AccountPage/index.jsx";
import LoginAdmin from "./Pages/AdminLoginPage/index.jsx";
import CategoryContent from "./Pages/CategoryContent/index.jsx";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Addadmin from "./components/addadmin.js";

const app = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/men" component={MenPage} />
        <Route exact path="/women" component={WomenPage} />
        <Route exact path="/boys" component={BoysPage} />
        <Route exact path="/girls" component={GirlsPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/login-admin" component={LoginAdmin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-category" component={AddCategory} />
        <Route exact path="/add-admin" component={Addadmin} />
        <Route exact path="/update-page/:id" component={UpdatePage} />
        <Route exact path="/content/:category/:type_of_fashion" component={CategoryContent} />
      </Router>
      {/* <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/add-category" component={AddCategory} />
        <Route exact path="/update-page/:id" component={UpdatePage} />
      </Router> */}
      {/* <AccountPage /> */}
    </div>
  );
}
export default app;
