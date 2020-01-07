import './App.css'
import React, { Component } from 'react'
import mario from './images/mario.jpg'

export default class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    end: false
  }
  componentDidMount() {
    var countDownDate = new Date("Jan 7, 2020 7:30:0").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
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
    if (distance < 0) {
      this.setState({
        end: true
      })
    }
  }
  cTime() {
    setInterval(() => {
      var countDownDate = new Date("Jan 7, 2020 7:30:0").getTime();
      var now = new Date().getTime();

      var distance = countDownDate - now;

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

      if (distance < 0) {
        this.setState({
          end: true
        })
      }
    }, 1000)
  }
  render() {

    const { days, hours, minutes, seconds, end } = this.state

    if (!end) {
      this.cTime();
      return (
        <div className="clock">
          <div className="numbers">
            <p className="hours">{days}&nbsp;</p>
            <p className="placeholder">88</p>
          </div>
          Dias
        <br />
          <br />
          <div className="numbers">
            <p className="hours">{hours.length >= 2 ? hours : '0' + hours}&nbsp;</p>
            <p className="placeholder">88</p>
          </div>
          Horas
        <br />
          <br />

          <div className="numbers">
            <p className="minutes">{minutes.length >= 2 ? minutes : '0' + minutes}&nbsp;</p>
            <p className="placeholder">88</p>
          </div>
          Minutos
        <br />
          <br />

          <div className="numbers">
            <p className="seconds">{seconds.length >= 2 ? seconds : '0' + seconds}&nbsp;</p>
            <p className="placeholder">88</p>
          </div>
          Segundos
      </div>
      )
    }
    else {
      return (
        <React.Fragment>
          <img src={mario} alt={"mario"} />
          <div className="container">
            <h1>HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</h1>
          </div>
        </React.Fragment>

      );
    }
  }
}