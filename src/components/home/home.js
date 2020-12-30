import React, { Component } from "react";
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
          <p className="block__text--slogan">БЫТЬ</p>
          <p className="block__text--slogan">ЗДОРОВЕНЬКИМ</p>
          <p className="block__text--slogan block__text--slogan-last">ХОЧУ</p>
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
