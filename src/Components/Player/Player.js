import React, { Component } from 'react';
import sCrest from '../../assets/sly-crest.png';
import gCrest from '../../assets/gryf-crest.png';
import rCrest from '../../assets/rav.png';
import hCrest from '../../assets/hufflepuff.png';

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <section className="player-section">
        <article className="left-side">
          <h6 className="left-house">Gryffindor</h6>
          <h6 className="left-points">{this.props.g} Points</h6>
        <img className="house-crest" src={gCrest} alt="Gryffindor House Crest" />
        </article>
        <article className="left-side">
          <img className="house-crest" src={sCrest} alt="Slytherin House Crest" />
          <h6 className="left-house">Slytherin</h6>
          <h6 className="left-points">{this.props.h} Points</h6>
        </article>
        <article className="left-side">
          <h6 className="left-house">Ravenclaw</h6>
          <h6 className="left-points">{this.props.r} Points</h6>
          <img className="house-crest" src={rCrest} alt="Ravenclaw House Crest" />
        </article>
        <article className="left-side">
          <img className="left-crest" src={hCrest} alt="Hufflepuff House Crest" />
          <h6 className="left-points">{this.props.s} Points</h6>
          <h6 className="left-house">Hufflepuff</h6>
        </article>
      </section>
    )
  }
}