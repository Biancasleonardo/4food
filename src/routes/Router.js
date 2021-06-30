import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChartPage from "../pages/ChartPage/ChartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignUpAdressPage from "../pages/SignUpAdressPage/SignUpAdressPage";
import RestaurantPage from "../pages/RestaurantPage/RetaurantPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { Redirect } from "react-router";

const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {token ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/home">
            <HomePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/perfil"}>
          <ProfilePage />
        </Route>
        <Route exact path={"/cadastro"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/cadastro/endereco"}>
          <SignUpAdressPage />
        </Route>
        <Route exact path={"/carrinho"}>
          <ChartPage />
        </Route>
        <Route exact path={"/restaurante/:id"}>
          <RestaurantPage />
        </Route>
        <Route exact path={"/busca"}>
          <SearchPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
