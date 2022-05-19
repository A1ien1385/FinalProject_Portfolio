import React, { Component } from "react";
import "./scss/main.scss";
import Form from "./Form";
import Result from "./Result";

export class Weather extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=125dfe34ddc9af7d97240e695f0da887&units=metric%60`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Won't work");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((state) => ({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: state.value,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((state) => ({
          err: true,
          city: this.state.value,
        }));
      });
  };

  render() {
    return (
      <>
        <div className="weather_box">
          <h1 className="weather_title">Weather: </h1>

          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </>
    );
  }
}

export default Weather;
