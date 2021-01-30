import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

//Components
import BoardComponent from "./components/BoardComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";
import DashboardComponent from "./components/DashboardComponent";
import ForgotComponent from "./components/ForgotComponent";
import InviteFriendsComponent from "./components/InviteFriendsComponent";
import LoginComponent from "./components/LoginComponent";
import MainComponent from "./components/MainComponent";
import NavBarComponent from "./components/NavBarComponent";
import RegisterComponent from "./components/RegisterComponent";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="static-top sticky-top">
            <NavBarComponent />
          </div>
          <Route path="/" exact render={(props) => <MainComponent />} />
          <Route path="/board" exact render={(props) => <BoardComponent />} />
          <Route
            path="/createBoard"
            exact
            render={(props) => <CreateBoardComponent />}
          />
          <Route
            path="/invite"
            exact
            render={(props) => <InviteFriendsComponent />}
          />
          <Route path="/login" exact render={(props) => <LoginComponent />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <DashboardComponent />}
          />
          <Route path="/forgot" exact render={(props) => <ForgotComponent />} />
          <Route
            path="/register"
            exact
            render={(props) => <RegisterComponent />}
          />
        </Router>
      </div>
    </Provider>
  );
}
