import React from "react";
import { Route } from "react-router-dom";
import AccountPage from "./AccountPage/AccountPage";
import CalculatorPage from "./CalculatorPage/CalculatorPage";
import FriendsPage from "./FriendsPage/FriendsPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import TodosPage from "./TodosPage/TodosPage";

const AccountRouter = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.url}`} component={AccountPage} />
      <Route path={`${match.url}/calculator`} component={CalculatorPage} />
      <Route path={`${match.url}/friends`} component={FriendsPage} />
      <Route path={`${match.url}/profile`} component={ProfilePage} />
      <Route path={`${match.url}/todos`} component={TodosPage} />
    </>
  );
};
export default AccountRouter;
