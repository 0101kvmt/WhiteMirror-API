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


  render() {
    if(!this.props.mirror.weather.currently){
      return(
        <p> loading.. </p>
      );
    } else {

      const replace = /-/g;
      const icon = this.props.mirror.weather.currently.icon.replace(replace, "_").toUpperCase();
      const temperature = this.props.mirror.weather.currently.temperature;
      const summary = this.props.mirror.weather.currently.summary;

      return (
        <MirrorWeathersContainer>

          <MirrorWeatherContainer>
            <MirrorWeatherIcon>
              <Skycons
               color='white'
               icon={icon}
               autoplay={true}
               style={{ width: '100%', height: '100%'}}
               />
            </MirrorWeatherIcon>

              <MirrorWeather>
                {temperature} °F;
              </MirrorWeather>

              <MirrorWeather>
                {summary}
              </MirrorWeather>

          </MirrorWeatherContainer>

          <MirrorWeatherContainer>
            <MirrorWeatherIcon>
              <Skycons
               color='white'
               icon="PARTLY_CLOUDY_DAY"
               autoplay={true}
               style={{ width: '100%', height: '100%'}}
               />
            </MirrorWeatherIcon>

              <MirrorWeather>
                {temperature} °F;
              </MirrorWeather>

              <MirrorWeather>
                {summary}
              </MirrorWeather>

          </MirrorWeatherContainer>

          <MirrorWeatherContainer>
            <MirrorWeatherIcon>
              <Skycons
               color='white'
               icon="SLEET"
               autoplay={true}
               style={{ width: '100%', height: '100%'}}
               />
            </MirrorWeatherIcon>

              <MirrorWeather>
                {temperature} °F;
              </MirrorWeather>

              <MirrorWeather>
                {summary}
              </MirrorWeather>

          </MirrorWeatherContainer>

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
