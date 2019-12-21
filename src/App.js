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
    setInterval( () => {
      var countDownDate = new Date("Jan 7, 2020 7:30:0").getTime();
      var now = new Date().getTime();
  
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
      })
  
      if (distance < 0) {
        this.setState({
          end:true
        })
      }
    },1000)
  }
  render() {
    this.cTime();
    return (
      <div>
        <p>
          {this.state.days +"d " + this.state.hours + "h "+ this.state.minutes + "m " + this.state.seconds + "s "}
        </p>
      </div>
    )
  }
}
