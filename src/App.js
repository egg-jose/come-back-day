import './App.css'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    end: false
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
    this.cTime();
    const {days,hours,minutes,seconds} = this.state
    return (
      // <div>
      //   <p>
      //     {this.state.days +"d " + this.state.hours + "h "+ this.state.minutes + "m " + this.state.seconds + "s "}
      //   </p>
      // </div>
      <div className="clock">
        <div className="numbers">
          <p className="hours">{days}</p>
          <p className="placeholder">88</p>
        </div>

        <div className="colon">
          <p>:</p>
        </div>
        <div className="numbers">
          <p className="hours">{hours.length >= 2 ? hours : '0'+ hours}</p>
          <p className="placeholder">88</p>
        </div>

        <div className="colon">
          <p>:</p>
        </div>

        <div className="numbers">
          <p className="minutes">{minutes.length >= 2 ? minutes : '0'+ minutes}</p>
          <p className="placeholder">88</p>
        </div>

        <div className="colon">
          <p>:</p>
        </div>

        <div className="numbers">
          <p className="seconds">{seconds.length >= 2 ? seconds : '0'+ seconds}</p>
          <p className="placeholder">88</p>
        </div>
      </div>
    )
  }
}
