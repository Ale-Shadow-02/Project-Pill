import React, { Component } from "react";
import "./title.scss";

export default class Title extends Component {
  render() {
    return (
      <div className="title__body">
        <p className="block__text--slogan">БЫТЬ</p>
        <p className="block__text--slogan">ЗДОРОВЕНЬКИМ</p>
        <p className="block__text--slogan block__text--slogan-last">ХОЧУ</p>
      </div>
    );
  }
}
