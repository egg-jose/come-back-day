import './App.css'
import React, { Component, Fragment } from 'react'
// import mario from './images/mario.jpg'

export default class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    // end: false
  }
  componentDidMount() {
    var countDownDate = new Date(2020, 2, 16, 18, 0, 0, 0);
    var now = new Date();
    var distance = now - countDownDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  }
  cTime() {
    setInterval(() => {
      var countDownDate = new Date(2020, 2, 16, 18, 0, 0, 0);
      var now = new Date();

      var distance = now - countDownDate;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    }, 1000)
  }
  render() {

    const { days, hours, minutes, seconds } = this.state
    this.cTime()
    return (
      <React.Fragment>

        <p className="title">Tiempo de cuarentena de cic</p>
        <div className="clock">
          <div className="numbers">
            <p className="days counter">{days}&nbsp;</p>
            <p className="hours counter">{hours.length >= 2 ? hours : '0' + hours}&nbsp;</p>
            <p className="minutes counter">{minutes.length >= 2 ? minutes : '0' + minutes}&nbsp;</p>
            <p className="seconds counter">{seconds.length >= 2 ? seconds : '0' + seconds}&nbsp;</p>
          </div>
          <div className="content">
            <p className="text">Dias</p>
            <p className="text">Horas</p>
            <p className="text">Minutos</p>
            <p className="text">Segundos</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}