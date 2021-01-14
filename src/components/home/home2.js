import React from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import home_logo from "../../images/home/home_logo.svg";
import "./home.scss";

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="home__body">
        <div className="block__text">
          <div className="home__logo">
            <img src={home_logo} className="home__logo--img" alt={home_logo} />
          </div>
          <Slogan />
          {this.props.appData.map((el) => {
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
        </div>
        <div className="block__list">
          <div className="block__list--header">
            <div className="block__list--title header">
              <h2 className="header__title">Список лекарств</h2>
              <input
                type="text"
                name="listTitle"
                value={this.props.listTitle}
                onChange={(e) => this.props.handleChange(e)}
                className="header__input"
                placeholder="название списка"
              />
            </div>
            {/* <div className="header__logo"></div> */}
          </div>
          <div className="input__list">
            <ul className="list">
              {this.props.list.map((item) => {
                return (
                  <li className="list__item" key={item.id}>
                    <div className="list__item--title">
                      <p>{item.valueTitle}</p>
                    </div>
                    <div>
                      <div className="list__item--radio-box">
                        {"До еды"}
                        <p className="account__input--radio-box">
                          {item.selectedRadio === "beforeMeals" ? "V" : null}
                        </p>
                      </div>
                      <div className="list__item--radio-box">
                        {"После еды"}
                        <p className="account__input--radio-box">
                          {item.selectedRadio === "afterMeals" ? "V" : null}
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
                            {item.morning ? "V" : null}
                          </p>
                        </div>
                        <p>Утро</p>
                      </div>
                      <div>
                        <div
                          className="list__item--checkbox"
                          id="list__item-render"
                        >
                          <p className="account__item--checkbox-box">
                            {item.day ? "V" : null}
                          </p>
                        </div>
                        <p>День</p>
                      </div>
                      <div>
                        <div
                          className="list__item--checkbox"
                          id="list__item-render"
                        >
                          <p className="account__item--checkbox-box">
                            {item.evening ? "V" : null}
                          </p>
                        </div>
                        <p>Вечер</p>
                      </div>
                    </div>
                    <button
                      className="list__item--btn"
                      onClick={() => this.props.deleteItem(item.id)}
                      title="Удалить препарат"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="list">
              <div className="list__wrap">
                <div className="list__item">
                  <input
                    className="list__item--title"
                    type="text"
                    value={this.props.itemTitle}
                    onChange={(e) =>
                      this.props.updateInput("itemTitle", e.target.value)
                    }
                    placeholder="Название лекарства"
                  />
                  <div>
                    <div className="list__item--radio-box">
                      {"До еды"}
                      <input
                        className="list__item--radio"
                        type="radio"
                        name="beforeMeals"
                        value="beforeMeals"
                        checked={this.props.selectedRadio === "beforeMeals"}
                        onChange={(e) => this.props.hendleRadioChecked(e)}
                      />
                    </div>
                    <div className="list__item--radio-box">
                      {"После еды"}
                      <input
                        className="list__item--radio"
                        type="radio"
                        name="afterMeals"
                        value="afterMeals"
                        checked={this.props.selectedRadio === "afterMeals"}
                        onChange={(e) => this.props.hendleRadioChecked(e)}
                      />
                    </div>
                  </div>
                  <div className="list__item--checkbox-box">
                    <label className="list__label--checkbox">
                      <input
                        className="list__item--checkbox"
                        type="checkbox"
                        name="morning"
                        checked={this.props.morning}
                        onChange={(e) => this.props.hendleChecked(e)}
                      />
                      {"Утро"}
                    </label>
                    <label className="list__label--checkbox">
                      <input
                        className="list__item--checkbox"
                        type="checkbox"
                        name="day"
                        checked={this.props.day}
                        onChange={(e) => this.props.hendleChecked(e)}
                      />
                      {"День"}
                    </label>
                    <label className="list__label--checkbox">
                      <input
                        className="list__item--checkbox"
                        type="checkbox"
                        name="evening"
                        checked={this.props.evening}
                        onChange={(e) => this.props.hendleChecked(e)}
                      />
                      {"Вечер"}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input__list--btn">
              <button
                className="input__list--button"
                onClick={() => this.props.addItem()}
                disabled={!this.props.itemTitle.length}
              >
                Добавить лекарство
              </button>
              <button
                className="input__list--button"
                id="save-button"
                onClick={() => this.props.saveList()}
                disabled={!this.props.list.length}
              >
                Сохранить список
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
