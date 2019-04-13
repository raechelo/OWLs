import React, { Component } from 'react';
import sCrest from '../../assets/sly-crest.png';
import gCrest from '../../assets/gryf-crest.png';
import rCrest from '../../assets/rav.png';
import hCrest from '../../assets/hufflepuff.png';

export default class Player extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="player-section">
        <article className="left-side">
          <h6>Gryffindor</h6>
        <img className="house-crest" src={gCrest} />
        </article>
        <article className="right-side">
          <img className="house-crest" src={hCrest} />
          <h6>Hufflepuff</h6>
        </article>
        <article className="left-side">
          <h6>Ravenclaw</h6>
          <img className="house-crest" src={rCrest} />
        </article>
        <article className="right-side">
          <img className="house-crest" src={sCrest} />
          <h6>Slytherin</h6>
        </article>
      </section>
    )
  }
}