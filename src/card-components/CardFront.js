import React, { Component } from 'react';
import MovieCard from './MovieCard.js'
export default class CardFront extends Component {

  render() {
    console.log(this.props.poster)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}


