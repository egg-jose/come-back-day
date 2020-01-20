import React, { Component } from 'react'
import './Holis.css'


export default class Holis extends Component {
    render() {
        return (
            <div className="bottom">
                <h1>innerWidth: {window.innerWidth}</h1>
                <h1>innerHeigh: {window.innerHeigh}</h1>
                <h1>outerWidth: {window.outerWidth}</h1>
                <h1>outerHeight: {window.outerHeight}</h1>
            </div>
        )
    }
}
