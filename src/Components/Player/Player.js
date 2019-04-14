import React, { Component } from 'react';
import sCrest from '../../assets/sly-crest.png';
import gCrest from '../../assets/gryf-crest.png';
import rCrest from '../../assets/rav.png';
import hCrest from '../../assets/hufflepuff.png';

export default class Player extends Component {
  constructor() {
    super()
    this.state = {
      hufflePoints: 0,
      slyPoints: 0,
      gryfPoints: 0,
      ravenPoints: 0
    }
  }

  render() {
    return (
      <section className="player-section">
        <article className="left-side">
          <h6 className="left-house">Gryffindor</h6>
          <h6 className="left-points">{this.state.gryfPoints} Points</h6>
        <img className="house-crest" src={gCrest} />
        </article>
        <article className="right-side">
          <img className="house-crest" src={hCrest} />
          <h6 className="right-house">Hufflepuff</h6>
          <h6 className="right-points">{this.state.hufflePoints} Points</h6>
        </article>
        <article className="left-side bot">
          <h6 className="leftt-house">Ravenclaw</h6>
          <h6 className="left-points">{this.state.ravenPoints} Points</h6>
          <img className="house-crest" src={rCrest} />
        </article>
        <article className="right-side bot">
          <img className="house-crest" src={sCrest} />
          <h6 className="right-points">{this.state.slyPoints} Points</h6>
          <h6 className="left-house">Slytherin</h6>
        </article>
      </section>
    )
  }
}