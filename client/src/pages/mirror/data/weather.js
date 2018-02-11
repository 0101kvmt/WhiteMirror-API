import React, { Component } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';

import { MirrorWeatherIcon, MirrorWeather, MirrorWeatherContainer, MirrorWeathersContainer } from './../../../components/Mirror';

import * as actions from './../action';

class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: false,
    };

  }
  componentDidMount() {
    this.props.getWeather(37.338208 , -121.88);

  }

  getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {


        console.log("latitudestate", position.coords.latitude);
        console.log("longitudestate", position.coords.longitude);
        this.props.getWeather(position.coords.latitude, position.coords.longitude);
        });
      } else {
        console.log("failed to geolocate");
      }
  }

  formatTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }


  render() {
    if(!this.props.mirror.weather.currently){
      return(
        <p> loading.. </p>
      );
    } else {
      const WeatherArray = [ this.props.mirror.weather.hourly.data[0], this.props.mirror.weather.hourly.data[6], this.props.mirror.weather.hourly.data[13] ]

      const HourlyWeather = WeatherArray.map((t, i) => {

        const replace = /-/g;
        const time = this.formatTime(t.time);
        console.log(time);

        return (
          <MirrorWeatherContainer>
            <MirrorWeatherIcon>
              <Skycons
               color='white'
               icon={t.icon.replace(replace, "_").toUpperCase()}
               autoplay={true}
               style={{ width: '100%', height: '100%'}}
               />
            </MirrorWeatherIcon>

              <MirrorWeather>
                {t.temperature} °F
              </MirrorWeather>

              <MirrorWeather>
                {t.summary == "Partly Cloudy" || t.summary == "Mostly Cloudy" ? "Cloudy" : t.summary }
              </MirrorWeather>

          </MirrorWeatherContainer>

        )
      })

      return (
        <MirrorWeathersContainer>

        {HourlyWeather}

        </MirrorWeathersContainer>

      );
    }
  }
};

const mapStateToProps = ({ mirror }) => {
  return {
    mirror
  }
};

export default connect(mapStateToProps, { ...actions })(Weather);
