import React, { Component } from "react";
import "./registration.scss";
import reg_logo from "../../images/registration/registration_logo.svg";

class Registration extends Component {
  render() {
    return (
      <div className="reg__body">
        <div className="block__text">
          <h1 className="block__text--title">Пилюля</h1>
          <p className="block__text--slogan">БЫТЬ</p>
          <p className="block__text--slogan">ЗДОРОВЕНЬКИМ</p>
          <p className="block__text--slogan block__text--slogan-last">ХОЧУ</p>
          <div className="block__text--logo">
            <img src={reg_logo} alt={reg_logo} className="block__text--img" />
          </div>
        </div>
        <div className="block__form">
          <form className="form">
            <input type="text" name="login" value="" placeholder="Логин" />
            <input type="text" name="password" value="" placeholder="Пароль" />
            <button className="form__btn" type="submit">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;