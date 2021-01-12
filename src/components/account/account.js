import React, { Component } from "react";
//import BlockText from "../blockText/blockText";
//import { Link } from "react-router-dom";
import Slogan from "../blockTextTitle/blockTextTitle";
import account_logo from "../../images/my_account/account_logo.svg";
import "./account.scss";

export default class Account extends Component {
  state = {
    sqlList: [],
    title: "",
    clickList: [],
  };

  // componentDidMount() {
  //   const routId = this.props.match.params.id;
  //   console.log(routId);
  //   fetch(`http://localhost:8000/list/${routId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       data.map((el) => {
  //         return this.setState({
  //           sqlList: [...el.newList],
  //           title: el.title,
  //         });
  //       });
  //     });
  // }

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
    fetch("http://localhost:8000/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          clickList: [...data],
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
    console.log(this.state.clickList);
    return (
      <div className="account__body">
        <div className="block__text">
          <div className="home__logo">
            <img
              src={account_logo}
              className="home__logo--img"
              alt={account_logo}
            />
          </div>
          <Slogan />
          {this.state.clickList.map((el) => {
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
          {/* <Link to="/" className="input__list--button account__list--button">
            Создать новый список
          </Link> */}
          <a
            href="http://localhost:3000/"
            className="input__list--button account__list--button"
          >
            Создать новый список
          </a>
        </div>
        {/* <BlockText /> */}
        <div className="block__list">
          <div className="block__list--header">
            <div className="block__list--title header">
              <h2 className="header__title">{this.state.title}</h2>
            </div>
            <div className="account__header--logo"></div>
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
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.morning ? "V" : null}
                        </p>
                        {"Утро"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.day ? "V" : null}
                        </p>
                        {"День"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.evening ? "V" : null}
                        </p>
                        {"Вечер"}
                      </div>
                    </div>
                    {/* <button
                      className="list__item--btn"
                      onClick={() => this.props.deleteItem(el.id)}
                      title="Удалить препарат"
                    >
                      X
                    </button> */}
                  </li>
                );
              })}
            </ul>
            <div className="input__list--btn" id="account__btn">
              <button
                className="input__list--button"
                id="account__list--btn"
                onClick={() => this.deleteList()}
              >
                Удалить список
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
