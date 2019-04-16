import React from 'react';

function Popup(props) {

  return (
    <div className="info-popup">
      <h3>How to Play:</h3>
      <p>You can choose from the filters to quiz yourself on specific topics or run through them at random.</p>
      <p>Should you get a question correct, you will earn your house points. Should you get a quesion wrong, you will earn all other houses points.</p>
      <section className="disabled">
        <p>To study previously incorrect questions click 'Study' then Start!</p>
        <button onClick={props.studyWrongQs}>Study</button>
        <button onClick={props.clearStorage}>Clear</button>
      </section>
      <button onClick={props.randomizeQuestions}>Start!</button>
    </div>
  )
}

export default Popup;