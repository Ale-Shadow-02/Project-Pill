import React, { Component } from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import account_logo from "../../images/my_account/account_logo.svg";
import "./account.scss";

export default class Account extends Component {
  state = {
    sqlList: [],
    title: "",
    clickList: [],
  };

  componentDidMount() {
    const routId = this.props.match.params.id;
    fetch(`http://localhost:8000/list/${routId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          sqlList: [...data.newList],
          title: data.title,
        });
      });
  }

  deleteList = () => {
    const routId = this.props.match.params.id;
    fetch(`http://localhost:8000/list/${routId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ clickList: [...data], sqlList: [] });
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="account__body">
        <div className="block__text">
          <div className="home__logo">
            <img
              src={account_logo}
              className="account__logo--img"
              alt={account_logo}
            />
          </div>
          <Slogan />
          {this.props.data.map((el) => {
            return (
              <div className="home__list" key={el.id}>
                <span className="home__list--title">{el.title}</span>
                <a
                  href={`http://localhost:3000/account/${el.id}`}
                  className="home__list--link"
                >
                  Перейти
                </a>
              </div>
            );
          })}
          <a
            href="http://localhost:3000/"
            className="input__list--button account__list--button"
          >
            Создать новый список
          </a>
        </div>
        <div className="block__list">
          <div className="block__list--header">
            <div className="block__list--title header" id="account__header">
              <h2 className="header__title">{this.state.title}</h2>
            </div>
            {/* <div className="account__header--logo"></div> */}
          </div>
          <div className="input__list">
            <ul className="list">
              {this.state.sqlList.map((el) => {
                return (
                  <li className="list__item" key={el.id}>
                    <div className="list__item--title">
                      <p>{el.valueTitle}</p>
                    </div>
                    <div>
                      <div className="list__item--radio-box">
                        {"До еды"}
                        <p className="account__input--radio-box">
                          {el.selectedRadio === "beforeMeals" ? "V" : null}
                        </p>
                      </div>
                      <div className="list__item--radio-box">
                        {"После еды"}
                        <p className="account__input--radio-box">
                          {el.selectedRadio === "afterMeals" ? "V" : null}
                        </p>
                      </div>
                    </div>
                    <div className="list__item--checkbox-box">
                      <div>
                        <div
                          className="list__item--checkbox"
                          id="list__item-render"
                        >
                          <p className="account__item--checkbox-box">
                            {el.morning ? "V" : null}
                          </p>
                        </div>
                        <p>{"Утро"}</p>
                      </div>
                      <div>
                        <div
                          className="list__item--checkbox"
                          id="list__item-render"
                        >
                          <p className="account__item--checkbox-box">
                            {el.day ? "V" : null}
                          </p>
                        </div>
                        <p>{"День"}</p>
                      </div>
                      <div>
                        <div
                          className="list__item--checkbox"
                          id="list__item-render"
                        >
                          <p className="account__item--checkbox-box">
                            {el.evening ? "V" : null}
                          </p>
                        </div>
                        <p>{"Вечер"}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="input__list--btn" id="account__btn">
              <a
                href="http://localhost:3000/"
                className="input__list--button"
                id="account__list--btn"
                onClick={() => this.deleteList()}
              >
                Удалить список
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
