import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

//Components
import DashboardComponent from "./components/DashboardComponent";
import ForgotComponent from "./components/ForgotComponent";
import LoginComponent from "./components/LoginComponent";
import MainComponent from "./components/MainComponent";
import NavBarComponent from "./components/NavBarComponent";
import RegisterComponent from "./components/RegisterComponent";
import CreateBoardComponent from "./components/CreateBoardComponent";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="static-top sticky-top">
            <NavBarComponent />
          </div>
          <Route path="/" exact render={(props) => <MainComponent />} />
          <Route
            path="/sets"
            exact
            render={(props) => <ExpansionListContainer />}
          />
          <Route
            path="/cards"
            exact
            render={(props) => <DisplayedCardsContainer />}
          />
          <Route path="/login" exact render={(props) => <LoginComponent />} />
          <Route
            path="/counter"
            exact
            render={(props) => <LifeCounterComponent />}
          />
          <Route
            path="/forgotPass"
            exact
            render={(props) => <ForgotComponent />}
          />
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
