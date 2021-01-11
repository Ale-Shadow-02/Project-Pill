import React from "react";
import { Link } from "react-router-dom";
import Slogan from "../blockTextTitle/blockTextTitle";
import home_logo from "../../images/home/home_logo.svg";
//import "./home.scss";

export default class BlockTtext extends React.Component {
  state = {
    clickList: [],
  };

  componentDidMount() {
    fetch("http://localhost:8000/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          clickList: [...data],
        });
      });
  }

  render() {
    console.log(this.state.clickList);
    return (
      <div className="block__text">
        <div className="home__logo">
          <img src={home_logo} className="home__logo--img" alt={home_logo} />
        </div>
        <Slogan />
        {/* <div className="home__list">
          <span className="home__list--title">{listTitle}</span>
          <a
            href={`http://localhost:3000/account/${textLink}`}
            className="home__list--link"
          >
            Перейти
          </a>
        </div> */}
        {/* {data.map((el) => {
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
        })} */}
        <Link to="/" className="input__list--button account__list--button">
          Добавить список
        </Link>
      </div>
    );
  }
}
