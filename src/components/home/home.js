import React, { Component } from "react";
import Title from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import home_logo from "../../images/home/home_logo.svg";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home__body">
        <div className="block__text">
          <div className="home__logo">
            <img src={home_logo} className="home__logo--img" alt={home_logo} />
          </div>
          <Title />
          <div className="home__list">
            <span className="home__list--title">Лекарства для Мамы</span>
            <Link to="/account-list" className="home__list--link">
              Перейти
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
