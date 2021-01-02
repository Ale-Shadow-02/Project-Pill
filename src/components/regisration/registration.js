import React, { Component } from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import "./registration.scss";
import reg_logo from "../../images/registration/registration_logo.svg";

class Registration extends Component {
  render() {
    return (
      <div className="reg__body">
        <div className="block__text">
          <h1 className="block__text--title">Пилюля</h1>
          <Slogan />
          <div className="block__text--logo">
            <img src={reg_logo} alt={reg_logo} className="block__text--img" />
          </div>
        </div>
        <div className="block__form">
          <form className="form">
            <input
              className="form__input"
              type="text"
              name="login"
              value=""
              placeholder="Логин"
            />
            <input
              className="form__input form__input--last"
              type="password"
              name="password"
              value=""
              placeholder="Пароль"
            />
            <button className="form__btn" type="submit">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
